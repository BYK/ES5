/**
 * @fileOverview The Date extensions library.
 * @name Date Extensions
 *
 * @author Burak Yiğit KAYA <byk@ampliovitam.com>
 * @version 1.0
 */

if (!Date.now)
/**
 * Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
 * Taken from https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/now
 * 
 * @return {Number} The number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
 */
Date.now = function now()
{
	return +new Date();
};

if (!Date.prototype.toISOString)
/**
 * Returns a string representing the time in the Date Time string format as UTC.
 * Taken from http://www.json.org/json2.js
 * 
 * @return {String}
 */
Date.prototype.toISOString = function()
{
	function f(n) {return n < 10 ? '0' + n : n;}

	return isFinite(this.valueOf()) ?
		this.getUTCFullYear() + '-' +
		f(this.getUTCMonth() + 1) + '-' +
		f(this.getUTCDate())      + 'T' +
		f(this.getUTCHours())     + ':' +
		f(this.getUTCMinutes())   + ':' +
		f(this.getUTCSeconds())   + 'Z' : null;
};

if (!Date.prototype.toJSON)
/**
 * Returns the JSON value representation of the Date object.
 * Same as Date.prototype.toISOString
 * 
 * @return {String}
 */
Date.prototype.toJSON = function(key)
{
	//nested function is needed for correct ".length" return value
	return this.toISOString();
};
