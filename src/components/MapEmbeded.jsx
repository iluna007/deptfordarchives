import { useEffect, useState, useRef } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { FaMapMarker } from "react-icons/fa";
import store from "../flux/store";
import { selectRecord } from "../flux/actions";
import "mapbox-gl/dist/mapbox-gl.css";
import mlcontour from "maplibre-contour"; // Ensure this package is installed

// Set the global Mapbox token
mapboxgl.accessToken =
	"pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY203NjMwZHptMHAzaDJrcXlrbnNuMHJlZiJ9.hkoRlM6gQ-BflcGjpI40GA";

const MapEmbed = () => {
	const [viewport, setViewport] = useState({
		latitude: 51.47561999837138,
		longitude: -0.03779598646874994,
		zoom: 13,
		pitch: 0,
		bearing: 0,
		width: "100%",
		height: "100%",
		hash: true,
	});
	const [records, setRecords] = useState(store.getAll());
	const [selectedRecord, setSelectedRecord] = useState(
		store.getSelectedRecord()
	);
	const mapRef = useRef(null);

	useEffect(() => {
		const update = () => {
			setRecords(store.getAll());
			setSelectedRecord(store.getSelectedRecord());
		};
		store.on("change", update);
		return () => store.off("change", update);
	}, []);

	const handleMapLoad = () => {
		const map = mapRef.current.getMap();

		// Set up mlcontour for DEM-based contours
		const demSource = new mlcontour.DemSource({
			url: "https://demotiles.maplibre.org/terrain-tiles/{z}/{x}/{y}.png",
			encoding: "mapbox",
			maxzoom: 12,
			worker: true,
		});
		demSource.setupMaplibre(mapboxgl);

		// Add hillshade source and layer with exaggeration set to 5
		if (!map.getSource("hillshadeSource")) {
			map.addSource("hillshadeSource", {
				type: "raster-dem",
				tiles: [demSource.sharedDemProtocolUrl],
				tileSize: 512,
				maxzoom: 12,
			});
		}
		if (!map.getLayer("hills")) {
			map.addLayer({
				id: "hills",
				type: "hillshade",
				source: "hillshadeSource",
				layout: { visibility: "visible" },
				paint: { "hillshade-exaggeration": 5 },
			});
		}

		// Add contour vector source and layers
		if (!map.getSource("contourSourceFeet")) {
			map.addSource("contourSourceFeet", {
				type: "vector",
				tiles: [
					demSource.contourProtocolUrl({
						multiplier: 3.28084,
						overzoom: 1,
						thresholds: {
							11: [200, 1000],
							12: [100, 500],
							13: [100, 500],
							14: [50, 200],
							15: [20, 100],
						},
						elevationKey: "ele",
						levelKey: "level",
						contourLayer: "contours",
					}),
				],
				maxzoom: 15,
			});
		}
		if (!map.getLayer("contours")) {
			map.addLayer({
				id: "contours",
				type: "line",
				source: "contourSourceFeet",
				"source-layer": "contours",
				paint: {
					"line-opacity": 0.5,
					"line-width": ["match", ["get", "level"], 1, 1, 0.5],
				},
			});
		}
		if (!map.getLayer("contour-text")) {
			map.addLayer({
				id: "contour-text",
				type: "symbol",
				source: "contourSourceFeet",
				"source-layer": "contours",
				filter: [">", ["get", "level"], 0],
				paint: {
					"text-halo-color": "white",
					"text-halo-width": 1,
				},
				layout: {
					"symbol-placement": "line",
					"text-size": 10,
					"text-field": ["concat", ["number-format", ["get", "ele"], {}], "'"],
					"text-font": ["Noto Sans Bold"],
				},
			});
		}
	};

	// When selectedRecord changes, fly to its location.
	useEffect(() => {
		if (selectedRecord && mapRef.current) {
			const map = mapRef.current.getMap();
			map.flyTo({
				center: [selectedRecord.lon, selectedRecord.lat],
				zoom: 8, // Adjust zoom level as needed
				speed: 1.2,
				curve: 1,
				easing: (t) => t,
			});
		}
	}, [selectedRecord]);

	const handleMarkerClick = (record) => {
		selectRecord(record);
	};

	return (
		<div className='map-wrapper' style={{ height: "500px", width: "100%" }}>
			<ReactMapGL
				ref={mapRef}
				{...viewport}
				mapStyle='mapbox://styles/ikerluna/cm7b6ykln005d01s7fdffhda4'
				mapboxApiAccessToken={mapboxgl.accessToken}
				onLoad={handleMapLoad}
				onMove={(evt) => setViewport(evt.viewState)}
				onError={(error) => console.error("Mapbox error:", error)}
				interactive
			>
				<NavigationControl position='top-right' />
				{records.map((record) => (
					<Marker key={record.id} latitude={record.lat} longitude={record.lon}>
						<div
							onClick={() => handleMarkerClick(record)}
							style={{
								cursor: "pointer",
								position: "relative",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<FaMapMarker size={40} color='magenta' />
							<span
								style={{
									position: "absolute",
									color: "white",
									fontWeight: "bold",
									fontSize: "0.8rem",
								}}
							>
								{record.id}
							</span>
						</div>
					</Marker>
				))}
				{selectedRecord && (
					<Popup
						className='custom-popup'
						latitude={selectedRecord.lat}
						longitude={selectedRecord.lon}
						closeButton
						closeOnClick={false}
						onClose={() => selectRecord(null)}
						offsetTop={-10}
					>
						<div>
							<div style={{ textAlign: "center", marginBottom: "10px" }}>
								<h3>{selectedRecord.id}</h3>
								<p>
									<strong>Recordist:</strong> {selectedRecord.recordist}
								</p>
								<p>
									<strong>Date:</strong> {selectedRecord.date}
								</p>
							</div>
							{/* Removed autoPlay to prevent unwanted activation */}
							<audio controls style={{ width: "100%" }}>
								<source src={selectedRecord.audioFilePath} type='audio/mpeg' />
								Your browser does not support the audio element.
							</audio>
						</div>
					</Popup>
				)}
			</ReactMapGL>
		</div>
	);
};

export default MapEmbed;
