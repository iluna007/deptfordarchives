import dataDummy from "./datadummy";
import dispatcher from "./dispatcher";

export const fetchData1 = async () => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 500));
		const data = dataDummy;
		dispatcher.emit("FETCH_DATA", data);
	} catch (error) {
		console.error("Error fetching dummy data:", error);
	}
};

export const selectRecord = (record) => {
	dispatcher.emit("SELECT_RECORD", record);
};
