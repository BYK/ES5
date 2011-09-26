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