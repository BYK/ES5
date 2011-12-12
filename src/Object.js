/**
 * @fileOverview The Object extensions library.
 * @name Object Extensions
 *
 * @author Burak Yiğit KAYA <byk@ampliovitam.com>
 * @version 1.0
 */

if (!Object.keys)
/**
 * Returns an array of all enumerable properties found directly upon a given object, in the same order as that provided by a for (var p in o) loop.
 * Taken from https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/Object/Keys
 *
 * @param {Object} obj The object whose enumerable own properties are to be returned.
 * @return {Array} All enumerable properties found directly upon the given object.
 */
Object.keys = function(obj)
{
	var result = [];
	for(var name in obj)
		if (Object.prototype.hasOwnProperty.apply(obj, name))
			result.push(name);

	return result;
};

if (!Object.getPrototypeOf)
/**
 * Returns the prototype of the specified object.
 *
 * @param {Object} obj The object whose prototype will be accessed
 * @return {Object} The prototype object of the provided object
 */
Object.getPrototypeOf = function(obj)
{
	return obj.__proto__ || obj.constructor.prototype;
};
