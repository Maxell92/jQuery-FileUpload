/**
 * @author Zechy <email@zechy.cz>
 * @param {string} id
 * @param {boolean} productionMode
 * @param {string} token
 * @param {number} maxFiles
 * @param {number} maxFileSize
 * @constructor
 */
var UploadController = function(id, productionMode, token, maxFiles, maxFileSize) {

	/**
	 * HTML ID inputu pro zpracování uploadu.
	 * @type {string}
	 */
	this.id = id;

	/**
	 * Vývojové nebo provozní prostředí?
	 * @type {bool}
	 */
	this.productionMode = productionMode;

	/**
	 * Upload token pro odlišení fronty.
	 * @type {string}
	 */
	this.token = token;

	/**
	 * Maximální počet souborů.
	 * @type {number}
	 */
	this.maxFiles = maxFiles;

	/**
	 * Maximální velikost souboru.
	 * @type {number}
	 */
	this.maxFileSize = maxFileSize;

	/**
	 * Počet souborů přidaných do nahrávání.
	 * @type {number}
	 */
	this.count = 0;

	/**
	 * ID aktuálně nahrávaného souboru.
	 * @type {number}
	 */
	this.id = 1;

	/**
	 * Vykreslování.
	 * @type {Renderer}
	 */
	this.render = new Renderer(this.id + "-table-tbody");
}

UploadController.prototype = {

	/**
	 * Přidání nového souboru k uploadu.
	 * @param {Object} file
	 * @returns {boolean}
	 */
	addFile: function(file) {
		var row = this.render.addRow(this.id++);

		if(this.count >= this.maxFiles) {
			// Error
			return false;
		} else if(file["size"] > this.maxFileSize) {
			// Error
			return false;
		} else {
			this.count++;
			// Add Row
			return true;
		}
	}
}