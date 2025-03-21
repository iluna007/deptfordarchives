import { useEffect, useState, useCallback } from "react";
import store from "../flux/store";
import { fetchData1 } from "../flux/actions";
import RecordingCard from "../components/RecordingCard";
import MapEmbed from "../components/MapEmbeded";
import Masonry from "react-masonry-css";
import "../Styles/FieldRecordings.css";

const FieldRecordings = () => {
	const [records, setRecords] = useState([]);
	const [filters, setFilters] = useState({
		recordist: "",
		tags: "",
		conditions: "",
		date: "",
	});
	const [filteredRecords, setFilteredRecords] = useState([]);
	const [expandedCard, setExpandedCard] = useState(null);

	const handleUpdate = useCallback(() => {
		const data = store.getAll() || [];
		setRecords(data);
	}, []);

	useEffect(() => {
		fetchData1();
		store.on("change", handleUpdate);
		return () => store.off("change", handleUpdate);
	}, [handleUpdate]);

	const distinctRecordists = [...new Set(records.map((r) => r.recordist))];
	const distinctKeywords = [
		...new Set(
			records.flatMap((r) =>
				r.tags ? r.tags.split(",").map((k) => k.trim()) : []
			)
		),
	];
	const distinctConditions = [...new Set(records.map((r) => r.conditions))];
	const distinctDates = [...new Set(records.map((r) => r.date))];

	useEffect(() => {
		let filtered = records;
		if (filters.recordist)
			filtered = filtered.filter((r) => r.recordist === filters.recordist);
		if (filters.tags)
			filtered = filtered.filter(
				(r) =>
					r.tags && r.tags.toLowerCase().includes(filters.tags.toLowerCase())
			);
		if (filters.conditions)
			filtered = filtered.filter((r) => r.conditions === filters.conditions);
		if (filters.date)
			filtered = filtered.filter((r) => r.date === filters.date);
		setFilteredRecords(filtered);
	}, [records, filters]);

	const handleFilterClick = (column, value) => {
		setFilters((prev) => ({
			...prev,
			[column]: prev[column] === value ? "" : value,
		}));
	};

	const handleToggleCard = (cardId, viewMode) => {
		if (
			expandedCard &&
			expandedCard.id === cardId &&
			expandedCard.view === viewMode
		) {
			setExpandedCard(null);
		} else {
			setExpandedCard({ id: cardId, view: viewMode });
		}
	};

	// Define breakpoints for the masonry layout
	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		700: 1,
	};

	return (
		<div className='container-fluid'>
			<div
				className='mt-6'
				style={{
					textAlign: "justify",
					paddingTop: "48px",
					paddingBottom: "24px",
					paddingLeft: "32px",
					paddingRight: "32px",
				}}
			>
				<h2 className='title'>Field Recordings</h2>

				<div className='row mt-5'>
					<div className='row mt-12'>
						<p className='description'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>
					<div className='col-md-2'>
						<h3 className='subtitles'>Recordist</h3>
						<hr />
						<div className='filter-group'>
							<div className='buttons'>
								<button
									className={`filter-btn ${!filters.recordist ? "active" : ""}`}
									onClick={() => handleFilterClick("recordist", "")}
								>
									All
								</button>
								{distinctRecordists.map((name) => (
									<button
										key={name}
										className={`filter-btn ${
											filters.recordist === name ? "active" : ""
										}`}
										onClick={() => handleFilterClick("recordist", name)}
									>
										{name}
									</button>
								))}
							</div>
						</div>
						<h3 className='subtitles'>Key Words</h3>
						<hr />
						<div className='filter-group'>
							<div className='buttons'>
								<button
									className={`filter-btn ${!filters.tags ? "active" : ""}`}
									onClick={() => handleFilterClick("tags", "")}
								>
									All
								</button>
								{distinctKeywords.map((keyword) => (
									<button
										key={keyword}
										className={`filter-btn ${
											filters.tags === keyword ? "active" : ""
										}`}
										onClick={() => handleFilterClick("tags", keyword)}
									>
										{keyword}
									</button>
								))}
							</div>
						</div>
						<h3 className='subtitles'>Conditions</h3>
						<hr />
						<div className='filter-group'>
							<div className='buttons'>
								<button
									className={`filter-btn ${
										!filters.conditions ? "active" : ""
									}`}
									onClick={() => handleFilterClick("conditions", "")}
								>
									All
								</button>
								{distinctConditions.map((condition) => (
									<button
										key={condition}
										className={`filter-btn ${
											filters.conditions === condition ? "active" : ""
										}`}
										onClick={() => handleFilterClick("conditions", condition)}
									>
										{condition}
									</button>
								))}
							</div>
						</div>
						<h3 className='subtitles'>Date</h3>
						<hr />
						<div className='filter-group'>
							<div className='buttons'>
								<button
									className={`filter-btn ${!filters.date ? "active" : ""}`}
									onClick={() => handleFilterClick("date", "")}
								>
									All
								</button>
								{distinctDates.map((date) => (
									<button
										key={date}
										className={`filter-btn ${
											filters.date === date ? "active" : ""
										}`}
										onClick={() => handleFilterClick("date", date)}
									>
										{date}
									</button>
								))}
							</div>
						</div>
					</div>
					<div className='col-md-5'>
						<div className='recording-list'>
							{filteredRecords.length > 0 ? (
								<Masonry
									breakpointCols={breakpointColumnsObj}
									className='my-masonry-grid'
									columnClassName='my-masonry-grid_column'
								>
									{filteredRecords.map((record) => (
										<RecordingCard
											key={record.id}
											record={record}
											expanded={expandedCard && expandedCard.id === record.id}
											viewMode={
												expandedCard && expandedCard.id === record.id
													? expandedCard.view
													: null
											}
											onToggle={handleToggleCard}
										/>
									))}
								</Masonry>
							) : (
								<p>No recordings available.</p>
							)}
						</div>
					</div>
					<div className='col-md-5'>
						<Masonry
							breakpointCols={{ default: 1 }}
							className='my-masonry-grid'
							columnClassName='my-masonry-grid_column'
						>
							<div className='map-masonry-item'>
								<MapEmbed />
							</div>
						</Masonry>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FieldRecordings;
