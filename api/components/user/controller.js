const defStore = require("../../../store/dummy");
const nanoID   = require("nanoid");
const table    = 'user';

module.exports = function(injStore) {
	// set Store
	let store = (!injStore) ? defStore : injStore;
	
	/**
	* list
	*/
	function list() {
		return store.list(table);
	}

	/**
	* get
	*/
	function get(id) {
		return store.get(table, id);
	}

	/**
	* upsert
	*/
	function upsert(body) {
		const user = {
			name: body.name
		}
		// define User ID
		user.id = (!body.id) ? nanoid() : body.id;
		
		return store.upsert(table, user);
	}

	// default Return
	return {
		list, get, upsert
	}
}