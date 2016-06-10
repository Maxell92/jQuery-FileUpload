/**
 * @author Zechy <email@zechy.cz>
 * @constructor
 */
var TableRow = function(id, parent) {

	/**
	 * @var {Number}
	 */
	this.id = id;

	/**
	 * @type {Element}
	 */
	this.parent = parent;

	/**
	 * @type {Element}
	 */
	this.row = document.createElement("tr");

	/**
	 * Vygenerování nového řádku.
	 */
	this.generate = function() {
		this.row.setAttribute("id", "file-"+ this.id.toString());
		this.row.setAttribute("data-id", this.id.toString());
	};

	this.generate();
}

TableRow.prototype = {

	/**
	 * @returns {Element}
	 */
	getElement: function() {
		return this.row;
	}
}

/**
 * @author Zechy <email@zechy.cz>
 * @constructor
 */
var Renderer = function(table) {

	/**
	 * Seznam řádků.
	 * @type {Array}
	 */
	this.rows = new Array();

	/**
	 * Rodič prvků.
	 * @type {Element}
	 */
	this.table = document.getElementById(table);
}

Renderer.prototype = {

	/**
	 * Vygeneruje nový řádek.
	 * @param {number} id
	 * @returns {TableRow}
	 */
	addRow: function(id) {
		this.rows[id] = new TableRow(id, this.table);
		return this.rows[id];
	},

	/**
	 * Vrátí řádek se zadaným ID.
	 * @param {number} id
	 * @returns {TableRow|null}
	 */
	getRow: function(id) {
		if(id in this.rows) {
			return this.rows[id];
		} else {
			return null;
		}
	}
}