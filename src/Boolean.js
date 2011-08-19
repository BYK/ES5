/**
 * @fileOverview The Boolean extensions library.
 * @name Boolean Extensions
 *
 * @author Burak Yiğit KAYA <byk@ampliovitam.com>
 * @version 1.0
 */

/**
 * Returns the JSON value representation of the boolean.
 * Same as Boolean.prototype.valueOf
 * 
 * @return {String}
 */
Boolean.prototype.toJSON = function (key)
{
	return this.valueOf();
};
