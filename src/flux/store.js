// store.js
import { EventEmitter } from "eventemitter3";
import dispatcher from "./dispatcher";

class Store extends EventEmitter {
	constructor() {
		super();
		this.data = [];
		this.selectedRecord = null;
	}

	getAll() {
		return this.data;
	}

	getSelectedRecord() {
		return this.selectedRecord;
	}

	setData(newData) {
		this.data = newData;
		this.emit("change");
	}

	setSelectedRecord(record) {
		this.selectedRecord = record;
		this.emit("change");
	}
}

const store = new Store();

dispatcher.on("FETCH_DATA", (data) => {
	store.setData(data);
});

dispatcher.on("SELECT_RECORD", (record) => {
	store.setSelectedRecord(record);
});

export default store;
