/**
 * es5实现数组map
 */ 
Array.prototype.MyMap = function(fn,context) {
	var arr = Array.prototype.slice.call(this)
	var mappedArr = []
	for(var i = 0;i < arr.length;i++) {
		if(!arr.hasOwnProperty(i))continue
		mappedArr.push(fn.call(context,arr[i],i,this))
	}
	return mappedArr
}
/**
 * es5实现reduce
 */
Array.prototype.myReduce = function(fn,initialValue) {
	var arr = Array.prototype.slice.call(this)
	var res , startIndex
	res = initialValue ? initialValue: arr[0],
	for (var i = 0;i < arr.length;i++) {
		res = fn.call(null,res,arr[i],i,this)
	}
	return res
}