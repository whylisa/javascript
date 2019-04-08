var name = 'the window'
var object = {
	name: 'my object',
	getname: function() {
		var that = this;
		console.log(that)
		console.log(this)
		return function() {
			console.log(that);
			console.log(this)
			return that.name;
		}
	}
}
console.log(object.getname()());
