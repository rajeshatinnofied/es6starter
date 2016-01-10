const storageName = 'mytodos';

let instance = null;

export class LocalStorage {
	
	/**
	 * Create the LocalStorage class with a specific storage name
	 * default format is, the data is an array
	 * @param  {String} storageName Name of the storage
	 */
	constructor() {
		if(!instance) {
			instance = this;
		}
		if(!window.localStorage.hasOwnProperty(storageName)) {
			window.localStorage[storageName] = JSON.stringify([]);
		}
		this.storage = JSON.parse(window.localStorage[storageName]);
		return instance;
	}

	/**
	 * Get the whole data from the storage
	 * @return {Object} The data from the storage
	 */
	getTotalData() {
		return this.storage;
	}

	/**
	 * Insert a new data at index, if index provided, otheerwise 
	 * at last position, an id will be generated, format is
	 * {id:id,data:data}
	 * @param {Object} object the object to add to the storage
	 * @param {Number} index  index of insertion, default -1
	 */
	addData(object) {
		console.log('in service',object);
		let date = new Date();
		let objectID = 'id_'+this.storage.length+'_'+date.getMilliseconds();

		this.storage.push({
			id:objectID,
			data:object
		});
		window.localStorage[storageName] = JSON.stringify(this.storage);
		this.updateContainer('todoAdded');
	}

	deleteData(id) {
		if(this.storage.length===0) {
			return;
		}

	}

	updateContainer(eventName) {
		let updateEvent = new Event(eventName);
		window.dispatchEvent(updateEvent);
	}
}