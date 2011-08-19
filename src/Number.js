/**
 * @fileOverview The Number extensions library.
 * @name Number Extensions
 *
 * @author Burak Yiğit KAYA <byk@ampliovitam.com>
 * @version 1.0
 */

/**
 * Returns the JSON value representation of the Number.
 * Same as Number.prototype.valueOf
 * 
 * @return {String}
 */
Number.prototype.toJSON = function (key)
{
	return this.valueOf();
};
