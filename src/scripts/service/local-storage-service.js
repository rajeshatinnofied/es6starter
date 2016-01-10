export class LocalStorage {
	
	/**
	 * Create the LocalStorage class with a specific storage name
	 * default format is, the data is an array
	 * @param  {String} storageName Name of the storage
	 */
	constructor(storageName) {
		this.storageName = storageName;
		if(!window.localStorage.hasOwnProperty(storageName)) {
			window.localStorage[storageName] = JSON.stringify([]);
		}
		this.storage = JSON.parse(window.localStorge[storageName]);
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
	addData(object,index=-1) {
		let date = new Date();
		let objectID = 'id_'+this.storage.length+'_'+date.getMilliseconds();

		if(this.storage.length<index||index==-1) {
			index = this.storage.length;
		}
		let firstPart = this.storage.slice(0,index);
		let lastPart = this.storage.slice(index, this.storage.length);
		firstPart.push({
			id:objectID,
			data:object
		});
		this.storage = firstPart.concat(lastPart);
		window.localStorge[storageName] = JSON.stringify(this.localStorage);
	}
}