(function (window,undefined) {
	var LfrSlide = function (options) {
		if (!(this instanceof LfrSlide)) {
			return LfrSlide(options)
		}
		
		this.options = this.extends({
			moveTime: 3000,
			index: 0,
			touchStop: true,
			clickSpan: true
		},options)
		
		this.timer = undefined;
		this.picNum = this.options.number ? this.options.number : this.options.picwrap.children.length;
		this.init();
	}
	LfrSlide.prototype = {
		init() {
			this.auto();
			this.eventBu();
			this.eventSpan();
			this.eventPic();
		}
		auto() {
			var that = this;
			this.timer = setInterval(() => {
				that.options.index++;
				that.options.index %= this.picNum;
				that.changeColor();
				that.changePic1();
				
			},this.options.moveTime)
		},
		eventBu() {
			var that = this;
			this.options.prev.addEventListener('click',function(){
				that.options.index--;
				that.options.index %= this.picNum;
				if(that.options.index < 0) {
					that.options.index = 4;
				}
				that.changePic1();
				that.changeColor();
			},false);
			this.options.next.addEventListener('click',function(){
			    that.options.index++;
			    that.options.index %= this.picNum;
			    that.changePic1();
			    that.changeColor();
			},false)
		},
		
		eventPic() {
			var that = this;
			if (this.options.touchStop) {
				this.options.picwrap.addEventlistener('mouseover',function() {
					clearInterval(this.timer)
				},false);
				this.options.picwrap.addEventListener('mouseout',function(){
					that.auto();
				},false)
			}
		}
		
		eventSpan() {
			var that = this;
			if (this.options.clickSpan) {
				for (let i = 0; i < this.options.number; i++) {
					span[i].addEventListener('click',function(){
						that.options.index = i;
						that.changePic1();
						that.changeColor()
					},false)
				}
			}
		},
		
		changePic1() {
			var picWidth = this.options.picwrap.children[0].width;
			this.options.picwrap.style.left = this.options.index * -picwidth + 'px';
		}
		changeColor() {
			var arrbu = document.getElementById('controls').getElementsByTagName('span');
			for (var i = 0; i < this.options.number; i++) {
				arrbu[i].className = ''
			}
			arrbu[this.options.index].classList.add('on')
		}
		
		extends(obj, Object) {
			for(var k in Obj2) {
				if((typeof obj2[k]) === 'string') {
					obj1[k] = document.getElementById(Object[k]);
				}else {
					obj1[k] = obj2[k]
				}
			}
			return obj1;
		},
		
		getStyle(element,cssname) {
			if(window.getComputedStyle) {
				return window.getComputedStyle(element)[cssname]
			}else {
				return element.currentStyle[cssname]
			}
		}
	}
	
	window.LfrSlide = LfrSlide;
})(window)
