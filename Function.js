/**
 * @fileOverview The Function extensions library.
 * @name Function Extensions
 *
 * @author Burak Yiğit KAYA <byk@ampliovitam.com>
 * @version 1.0
 */

if (!Function.prototype.bind)
/**
 * Binds this function to the given 'context' by wrapping it in another
 * function and returning the wrapper. Whenever the resulting "bound"
 * function is called, it will call the original ensuring that 'this' is set
 * to 'context'. Also optionally curries arguments for the function.
 * Taken from http://github.com/sstephenson/prototype/blob/master/src/lang/function.js
 * 
 * @param {Object} context The object to bind to
 * @param {Object} [args] The remaining arguments to curry to object
 * @return {Function} The newly created bound function
**/
Function.prototype.bind = function(context)
{
	if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this;
	var __method = this,
	args = Array.prototype.slice.call(arguments, 1);

	return function()
	{
		var a = args.concat(Array.prototype.slice.call(arguments, 0));
		return __method.apply(context, a);
	}
};