// src/components/DataDisplay.jsx
import React, { useEffect, useState } from "react";
import store from "../flux/store";

const DataDisplay = () => {
	const [data, setData] = useState(store.getAll());

	useEffect(() => {
		const handleUpdate = () => {
			setData(store.getAll());
		};

		store.on("change", handleUpdate); // Escucha cambios en el store

		return () => {
			store.off("change", handleUpdate); // Limpia el listener al desmontar el componente
		};
	}, []);

	return (
		<div>
			<h2>Datos desde Google Sheets</h2>
			<ul>
				{data.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default DataDisplay;
