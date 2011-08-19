/**
 * @fileOverview The String extensions library.
 * @name String Extensions
 *
 * @author Burak Yiğit KAYA <byk@ampliovitam.com>
 * @version 1.0
 */

/**
 * Trims the whitespace around the text.
 *
 * @return {String} The trimmed string.
 */
if (!String.prototype.trim)
String.prototype.trim = function()
{
	return this.replace(/^[\s]+|[\s]+$/g, "");
};

/**
 * Returns the JSON value representation of the string.
 * Same as String.prototype.valueOf
 * 
 * @return {String}
 */
if (!String.prototype.toJSON)
String.prototype.toJSON = function(key)
{
	//nested function is needed for correct ".length" return value
	return this.valueOf();
};