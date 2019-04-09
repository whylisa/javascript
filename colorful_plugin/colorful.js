(function () {
	var options = {
		splitter: 'char'// 每个字符的颜色都是随机的
	}
	//helper
	var getRandomColor = function(){
	  return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)'; //随机颜色
	}

	function injector(t, splitter,text_color) {
		var text = t.textContent, //获取dom节点的内容
			//a = text.split(splitter),
			a,
			after,
			inject = '';
		if(splitter === 'char') {
			a = text.split('');
			after = '';
		}
		else if (splitter === 'word') {//每个单词都是颜色都是随机的
			a = text.split(' ');
			after = ' ';
		}
		else if (splitter === 'line') {//每一个句子都是随机的
			var r = t.innerHTML;
			var e = document.createElement('div');
			r = r.replace(/<br>/ig, 'hh');
			e.innerHTML = r;
			text = e.textContent;
			a = text.split('hh');
			after = '';
			e = null;//free storge
		}



		if (a.length) {
			for(var i = 0; i < a.length; i++) {
                if(text_color){//判断是否传入参数，传参就是自定义，不传参就是随机
				inject += '<span style="color:'+text_color+'">' + a[i] + '</span>' + after;
                	
                }else {
                var font_color = getRandomColor()
				inject += '<span style="color:'+font_color+'">' + a[i] + '</span>' + after;
                	
                }
			}
			t.setAttribute('aria-label', text);
			t.innerHTML = inject;
		}
	}
	//API
	
	var api = {
		
		config: function (opts) {
			if(!opts) return options;
			for(var key in opts) {
				options[key] = opts[key];
			}
			return this;
		},
        
		listen: function listen(elem,text_color) {
			if (typeof elem === 'string') {
				var elems = document.querySelectorAll(elem),
					i = elems.length;
					while (i--) {
						listen(elems[i],text_color);
					}
					return
			}
			injector(elem, options.splitter,text_color);

			return this;
		}
	}
	
	
	window.ColorDivide = api;
})();