/**
 * call
 */
Function.prototype.myCall = function (context = window,...args) {
	if(this === Function.prototype) {
		return undefined
	}
	context = context || window
	const fn = Symbol();
	context[fn] = this;
	const result = context[fn](...args);
	delete context[fn]
	return result 
}
/**
 * apply
 */

Function.prototype.myApply = function (context = window,args) {
	if(this === Function.prototype) {
		return undefined
	}
	const fn = Symbol();
	context[fn] = this;
	let result;
	if(Array.isArray(args)) {
		result = context[fn](..args);
	}else {
		result = context[fn]()''
	}
	delete context[fn]
	return result
}
/**
 * bind
 */

Function.prototype.myBind = function (context, ...args1) {
	if(this === Function.prototype) {
		throw new TypeError('Error')
	}
	const _this = this;
	return function F(...args2) {
		if(this instanceof F) {
			return new _this(...args1,...args2)
		}
		return _this.apply(context,args1.concat(args2))
	}
}