const db = {
	'user': [
		{ id: '1', name: 'Carlos' }
	]
};

/**
* list
*/
async function list(table) {
	return db[table];
}

/**
* get
*/
async function get(table, id) {
	let col = await list(table);
	return col.filter(item => item.id === id)[0] || null;

}

/**
* upsert
*/
async function upsert(table, data) {
	db[collection].push(data);
}

/**
* remove
*/
async function remove(table, id) {
	return true;
}

module.exports = {
	list,
	get,
	upsert,
	remove
}