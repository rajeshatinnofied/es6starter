require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
function sum(x, y) {
  return x + y;
}

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStorage = exports.LocalStorage = function () {

	/**
  * Create the LocalStorage class with a specific storage name
  * default format is, the data is an array
  * @param  {String} storageName Name of the storage
  */

	function LocalStorage(storageName) {
		_classCallCheck(this, LocalStorage);

		this.storageName = storageName;
		if (!window.localStorage.hasOwnProperty(storageName)) {
			window.localStorage[storageName] = JSON.stringify([]);
		}
		this.storage = JSON.parse(window.localStorge[storageName]);
	}

	/**
  * Get the whole data from the storage
  * @return {Object} The data from the storage
  */

	_createClass(LocalStorage, [{
		key: 'getTotalData',
		value: function getTotalData() {
			return this.storage;
		}

		/**
   * Insert a new data at index, if index provided, otheerwise 
   * at last position, an id will be generated, format is
   * {id:id,data:data}
   * @param {Object} object the object to add to the storage
   * @param {Number} index  index of insertion, default -1
   */

	}, {
		key: 'addData',
		value: function addData(object) {
			var index = arguments.length <= 1 || arguments[1] === undefined ? -1 : arguments[1];

			var date = new Date();
			var objectID = 'id_' + this.storage.length + '_' + date.getMilliseconds();

			if (this.storage.length < index || index == -1) {
				index = this.storage.length;
			}
			var firstPart = this.storage.slice(0, index);
			var lastPart = this.storage.slice(index, this.storage.length);
			firstPart.push({
				id: objectID,
				data: object
			});
			this.storage = firstPart.concat(lastPart);
			window.localStorge[storageName] = JSON.stringify(this.localStorage);
		}
	}]);

	return LocalStorage;
}();

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = exports.Header = function () {
	function Header(title) {
		_classCallCheck(this, Header);

		this.title = title;
	}

	_createClass(Header, [{
		key: "getTemplate",
		value: function getTemplate() {
			return "<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-md-offset-3 text-center\">\n\t\t\t\t\t\t<h2><label class=\"label label-success\">" + this.title + "</label>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
		}
	}]);

	return Header;
}();

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TodoContainer = undefined;

var _todoInputArea = require('./todo-input-area');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoContainer = exports.TodoContainer = function () {
	function TodoContainer() {
		_classCallCheck(this, TodoContainer);

		this.todoInput = new _todoInputArea.TodoInput();
	}

	_createClass(TodoContainer, [{
		key: 'getTemplate',
		value: function getTemplate() {
			var template = '<div class="row">\n\t\t\t\t\t\t\t<div class="col-sm-12 col-md-12">\n\t\t\t\t\t\t\t' + this.todoInput.getTemplate() + '\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>';
			return template;
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			this.todoInput.bindAddButtonEvent();
		}
	}]);

	return TodoContainer;
}();

},{"./todo-input-area":5}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoInput = exports.TodoInput = function () {
	function TodoInput() {
		_classCallCheck(this, TodoInput);
	}

	_createClass(TodoInput, [{
		key: 'getTemplate',
		value: function getTemplate() {
			var template = '<div class="form-group todo-input">\n\t\t\t\t\t\t\t<div class="col-sm-12 col-md-4 col-md-offset-4" id="input-area">\n\t\t\t\t\t\t\t<input type="text" class="sm-form-control" id="todoinput"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-sm-12 col-md-2">\n\t\t\t\t\t\t\t<button id="inputAddButton" class="btn btn-primary">Add</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>';
			return template;
		}
	}, {
		key: 'bindAddButtonEvent',
		value: function bindAddButtonEvent() {
			$('#inputAddButton').bind('click', this.addTodo);
			$('#todoinput').bind('keypress', this.todoTextType);
		}
	}, {
		key: 'todoTextType',
		value: function todoTextType() {
			TodoInput.removeErrorMessage();
		}
	}, {
		key: 'addTodo',
		value: function addTodo() {
			var text = $('#todoinput').val();
			console.log('text is', text);
			if (text == '') {
				console.log('here');
				TodoInput.addErrorMessage('Please type the todo here');
			}
			console.log('Hii');
		}
	}], [{
		key: 'addErrorMessage',
		value: function addErrorMessage(msg) {
			$('#input-area').append('<p>' + msg + '</p>').show('slow');
		}
	}, {
		key: 'removeErrorMessage',
		value: function removeErrorMessage() {
			$('#input-area>p').hide('slow');
		}
	}]);

	return TodoInput;
}();

},{}],"mynamespace":[function(require,module,exports){
'use strict';

var _header = require('./templates/header');

var _todoContainer = require('./templates/todo-container');

function startApp() {
	var header = new _header.Header('Simple todo List');
	var mainContainer = new _todoContainer.TodoContainer();
	$('#header').html(header.getTemplate());
	$('#todo_app').html(mainContainer.getTemplate());
	mainContainer.bindEvents();
}

startApp();

},{"./templates/header":3,"./templates/todo-container":4}]},{},["mynamespace",1,2,3,4,5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9iYXNlL2xpYi5qcyIsInNyYy9zY3JpcHRzL3NlcnZpY2UvbG9jYWwtc3RvcmFnZS1zZXJ2aWNlLmpzIiwic3JjL3NjcmlwdHMvdGVtcGxhdGVzL2hlYWRlci5qcyIsInNyYy9zY3JpcHRzL3RlbXBsYXRlcy90b2RvLWNvbnRhaW5lci5qcyIsInNyYy9zY3JpcHRzL3RlbXBsYXRlcy90b2RvLWlucHV0LWFyZWEuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0FnQixHQUFHLEdBQUgsR0FBRztBQUFaLFNBQVMsR0FBRyxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFBRSxTQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Q0FBRTs7Ozs7Ozs7Ozs7OztJQ0E5QixZQUFZLFdBQVosWUFBWTs7Ozs7Ozs7QUFPeEIsVUFQWSxZQUFZLENBT1osV0FBVyxFQUFFO3dCQVBiLFlBQVk7O0FBUXZCLE1BQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLE1BQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUNwRCxTQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7R0FDdEQ7QUFDRCxNQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0VBQzNEOzs7Ozs7QUFBQTtjQWJXLFlBQVk7O2lDQW1CVDtBQUNkLFVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztHQUNwQjs7Ozs7Ozs7Ozs7OzBCQVNPLE1BQU0sRUFBVztPQUFWLEtBQUsseURBQUMsQ0FBQyxDQUFD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QXBCc0IsR0FBRyxFQUFFO0FBQzNCLElBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7R0FDdkQ7Ozt1Q0FFMkI7QUFDM0IsSUFBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUNoQzs7O1FBeEJXLFNBQVM7Ozs7Ozs7Ozs7QUNHdEIsU0FBUyxRQUFRLEdBQUc7QUFDbkIsS0FBSSxNQUFNLEdBQUcsWUFKTixNQUFNLENBSVcsa0JBQWtCLENBQUMsQ0FBQztBQUM1QyxLQUFJLGFBQWEsR0FBRyxtQkFKYixhQUFhLEVBSW1CLENBQUM7QUFDeEMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUN4QyxFQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELGNBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztDQUMzQjs7QUFFRCxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gc3VtICh4LCB5KSB7IHJldHVybiB4ICsgeSB9IiwiZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSB7XG5cdFxuXHQvKipcblx0ICogQ3JlYXRlIHRoZSBMb2NhbFN0b3JhZ2UgY2xhc3Mgd2l0aCBhIHNwZWNpZmljIHN0b3JhZ2UgbmFtZVxuXHQgKiBkZWZhdWx0IGZvcm1hdCBpcywgdGhlIGRhdGEgaXMgYW4gYXJyYXlcblx0ICogQHBhcmFtICB7U3RyaW5nfSBzdG9yYWdlTmFtZSBOYW1lIG9mIHRoZSBzdG9yYWdlXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihzdG9yYWdlTmFtZSkge1xuXHRcdHRoaXMuc3RvcmFnZU5hbWUgPSBzdG9yYWdlTmFtZTtcblx0XHRpZighd2luZG93LmxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShzdG9yYWdlTmFtZSkpIHtcblx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Vbc3RvcmFnZU5hbWVdID0gSlNPTi5zdHJpbmdpZnkoW10pO1xuXHRcdH1cblx0XHR0aGlzLnN0b3JhZ2UgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JnZVtzdG9yYWdlTmFtZV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgd2hvbGUgZGF0YSBmcm9tIHRoZSBzdG9yYWdlXG5cdCAqIEByZXR1cm4ge09iamVjdH0gVGhlIGRhdGEgZnJvbSB0aGUgc3RvcmFnZVxuXHQgKi9cblx0Z2V0VG90YWxEYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLnN0b3JhZ2U7XG5cdH1cblxuXHQvKipcblx0ICogSW5zZXJ0IGEgbmV3IGRhdGEgYXQgaW5kZXgsIGlmIGluZGV4IHByb3ZpZGVkLCBvdGhlZXJ3aXNlIFxuXHQgKiBhdCBsYXN0IHBvc2l0aW9uLCBhbiBpZCB3aWxsIGJlIGdlbmVyYXRlZCwgZm9ybWF0IGlzXG5cdCAqIHtpZDppZCxkYXRhOmRhdGF9XG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgdGhlIG9iamVjdCB0byBhZGQgdG8gdGhlIHN0b3JhZ2Vcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4ICBpbmRleCBvZiBpbnNlcnRpb24sIGRlZmF1bHQgLTFcblx0ICovXG5cdGFkZERhdGEob2JqZWN0LGluZGV4PS0xKSB7XG5cdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCBvYmplY3RJRCA9ICdpZF8nK3RoaXMuc3RvcmFnZS5sZW5ndGgrJ18nK2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cblx0XHRpZih0aGlzLnN0b3JhZ2UubGVuZ3RoPGluZGV4fHxpbmRleD09LTEpIHtcblx0XHRcdGluZGV4ID0gdGhpcy5zdG9yYWdlLmxlbmd0aDtcblx0XHR9XG5cdFx0bGV0IGZpcnN0UGFydCA9IHRoaXMuc3RvcmFnZS5zbGljZSgwLGluZGV4KTtcblx0XHRsZXQgbGFzdFBhcnQgPSB0aGlzLnN0b3JhZ2Uuc2xpY2UoaW5kZXgsIHRoaXMuc3RvcmFnZS5sZW5ndGgpO1xuXHRcdGZpcnN0UGFydC5wdXNoKHtcblx0XHRcdGlkOm9iamVjdElELFxuXHRcdFx0ZGF0YTpvYmplY3Rcblx0XHR9KTtcblx0XHR0aGlzLnN0b3JhZ2UgPSBmaXJzdFBhcnQuY29uY2F0KGxhc3RQYXJ0KTtcblx0XHR3aW5kb3cubG9jYWxTdG9yZ2Vbc3RvcmFnZU5hbWVdID0gSlNPTi5zdHJpbmdpZnkodGhpcy5sb2NhbFN0b3JhZ2UpO1xuXHR9XG59IiwiZXhwb3J0IGNsYXNzIEhlYWRlciB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGUoKSB7XG5cdFx0cmV0dXJuIGA8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTMgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxoMj48bGFiZWwgY2xhc3M9XCJsYWJlbCBsYWJlbC1zdWNjZXNzXCI+JHt0aGlzLnRpdGxlfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5gO1xuXHR9XG59IiwiaW1wb3J0IHtUb2RvSW5wdXR9IGZyb20gJy4vdG9kby1pbnB1dC1hcmVhJztcblxuZXhwb3J0IGNsYXNzIFRvZG9Db250YWluZXIge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudG9kb0lucHV0ID0gbmV3IFRvZG9JbnB1dCgpO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGUoKSB7IFxuXHRcdGxldCB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgY29sLW1kLTEyXCI+XG5cdFx0XHRcdFx0XHRcdCR7dGhpcy50b2RvSW5wdXQuZ2V0VGVtcGxhdGUoKX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5gO1xuXHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0fVxuXG5cdGJpbmRFdmVudHMoKSB7XG5cdFx0dGhpcy50b2RvSW5wdXQuYmluZEFkZEJ1dHRvbkV2ZW50KCk7XG5cdH1cbn0iLCJleHBvcnQgY2xhc3MgVG9kb0lucHV0IHtcblx0Z2V0VGVtcGxhdGUoKSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHRvZG8taW5wdXRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjb2wtbWQtNCBjb2wtbWQtb2Zmc2V0LTRcIiBpZD1cImlucHV0LWFyZWFcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJzbS1mb3JtLWNvbnRyb2xcIiBpZD1cInRvZG9pbnB1dFwiLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgY29sLW1kLTJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBpZD1cImlucHV0QWRkQnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5BZGQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5gO1xuXHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0fVxuXG5cdGJpbmRBZGRCdXR0b25FdmVudCgpIHtcblx0XHQkKCcjaW5wdXRBZGRCdXR0b24nKS5iaW5kKCdjbGljaycsIHRoaXMuYWRkVG9kbyk7XG5cdFx0JCgnI3RvZG9pbnB1dCcpLmJpbmQoJ2tleXByZXNzJywgdGhpcy50b2RvVGV4dFR5cGUpO1xuXHR9XG5cblx0c3RhdGljIGFkZEVycm9yTWVzc2FnZShtc2cpIHtcblx0XHQkKCcjaW5wdXQtYXJlYScpLmFwcGVuZCgnPHA+Jyttc2crJzwvcD4nKS5zaG93KCdzbG93Jyk7XG5cdH1cblxuXHRzdGF0aWMgcmVtb3ZlRXJyb3JNZXNzYWdlKCkge1xuXHRcdCQoJyNpbnB1dC1hcmVhPnAnKS5oaWRlKCdzbG93Jyk7XG5cdH1cblxuXHR0b2RvVGV4dFR5cGUoKSB7XG5cdFx0VG9kb0lucHV0LnJlbW92ZUVycm9yTWVzc2FnZSgpO1xuXHR9XG5cblx0YWRkVG9kbygpIHtcblx0XHRsZXQgdGV4dCA9ICQoJyN0b2RvaW5wdXQnKS52YWwoKTtcblx0XHRjb25zb2xlLmxvZygndGV4dCBpcycsdGV4dCk7XG5cdFx0aWYodGV4dD09JycpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdoZXJlJyk7XG5cdFx0XHRUb2RvSW5wdXQuYWRkRXJyb3JNZXNzYWdlKCdQbGVhc2UgdHlwZSB0aGUgdG9kbyBoZXJlJyk7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKCdIaWknKTtcblx0fVxufSIsImltcG9ydCB7SGVhZGVyfSBmcm9tICcuL3RlbXBsYXRlcy9oZWFkZXInO1xuaW1wb3J0IHtUb2RvQ29udGFpbmVyfSBmcm9tICcuL3RlbXBsYXRlcy90b2RvLWNvbnRhaW5lcic7XG5cbmZ1bmN0aW9uIHN0YXJ0QXBwKCkge1xuXHRsZXQgaGVhZGVyID0gbmV3IEhlYWRlcignU2ltcGxlIHRvZG8gTGlzdCcpO1xuXHRsZXQgbWFpbkNvbnRhaW5lciA9IG5ldyBUb2RvQ29udGFpbmVyKCk7XG5cdCQoJyNoZWFkZXInKS5odG1sKGhlYWRlci5nZXRUZW1wbGF0ZSgpKTtcblx0JCgnI3RvZG9fYXBwJykuaHRtbChtYWluQ29udGFpbmVyLmdldFRlbXBsYXRlKCkpO1xuXHRtYWluQ29udGFpbmVyLmJpbmRFdmVudHMoKTtcbn1cblxuc3RhcnRBcHAoKTsiXX0=

//# sourceMappingURL=app.js.map
