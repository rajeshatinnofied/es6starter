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

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.todoAddlistener = todoAddlistener;
function todoAddlistener(todoListTemplate) {
	$('#all_todo_list').html(todoListTemplate.getTemplate());
}

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Todo = undefined;

var _localStorageService = require('../service/local-storage-service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var store = new _localStorageService.LocalStorage();

var Todo = exports.Todo = function () {
	function Todo(text) {
		_classCallCheck(this, Todo);

		this.todo = {
			text: text,
			time: new Date(),
			completed: false
		};
		store.addData(this.todo);
	}

	_createClass(Todo, [{
		key: 'addId',
		value: function addId(id) {
			this.todo.id = id;
		}
	}, {
		key: 'getTodo',
		value: function getTodo() {
			return this.todo;
		}
	}, {
		key: 'setCompleted',
		value: function setCompleted(isCompleted) {
			this.todo.completed = isCompleted;
		}
	}]);

	return Todo;
}();

},{"../service/local-storage-service":4}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var storageName = 'mytodos';

var instance = null;

var LocalStorage = exports.LocalStorage = function () {

	/**
  * Create the LocalStorage class with a specific storage name
  * default format is, the data is an array
  * @param  {String} storageName Name of the storage
  */

	function LocalStorage() {
		_classCallCheck(this, LocalStorage);

		if (!instance) {
			instance = this;
		}
		if (!window.localStorage.hasOwnProperty(storageName)) {
			window.localStorage[storageName] = JSON.stringify([]);
		}
		this.storage = JSON.parse(window.localStorage[storageName]);
		return instance;
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
			console.log('in service', object);
			var date = new Date();
			var objectID = 'id_' + this.storage.length + '_' + date.getMilliseconds();

			this.storage.push({
				id: objectID,
				data: object
			});
			window.localStorage[storageName] = JSON.stringify(this.storage);
			this.updateContainer('todoAdded');
		}
	}, {
		key: 'deleteData',
		value: function deleteData(id) {
			if (this.storage.length === 0) {
				return;
			}
		}
	}, {
		key: 'updateContainer',
		value: function updateContainer(eventName) {
			var updateEvent = new Event(eventName);
			window.dispatchEvent(updateEvent);
		}
	}]);

	return LocalStorage;
}();

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SingleTodoItem = undefined;

var _localStorageService = require('../service/local-storage-service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SingleTodoItem = exports.SingleTodoItem = function () {
	function SingleTodoItem(todo) {
		_classCallCheck(this, SingleTodoItem);

		this.todo = todo;
	}

	_createClass(SingleTodoItem, [{
		key: 'getTemplate',
		value: function getTemplate() {
			return '<li class="list-group-item">\n\t\t\t\t<span>\n\t\t\t\t\t<i class="fa fa-check"></i>\n\t\t\t\t</span>\n\t\t\t\t<label class="label label-default">\n\t\t\t\t\t' + this.todo.data.text + '\n\t\t\t\t</label>\n\t\t\t\t</li>';
		}
	}]);

	return SingleTodoItem;
}();

},{"../service/local-storage-service":4}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TodoContainer = undefined;

var _todoInputArea = require('./todo-input-area');

var _todoList = require('./todo-list');

var _tooListeners = require('../listeners/too-listeners');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoContainer = exports.TodoContainer = function () {
	function TodoContainer() {
		_classCallCheck(this, TodoContainer);

		this.todoInput = new _todoInputArea.TodoInput();
		this.todoList = new _todoList.TodoList();
	}

	_createClass(TodoContainer, [{
		key: 'getTemplate',
		value: function getTemplate() {
			var template = '<div class="row">\n\t\t\t\t\t\t\t<div class="col-sm-12 col-md-12">\n\t\t\t\t\t\t\t' + this.todoInput.getTemplate() + '\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>';
			template += '<div id="all_todo_list">\n\t\t\t\t\t\t' + this.todoList.getTemplate() + '\n\t\t\t\t\t</div>';
			this.addTodoAddListeners();
			return template;
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			this.todoInput.bindAddButtonEvent();
		}
	}, {
		key: 'addTodoAddListeners',
		value: function addTodoAddListeners() {
			var self = this;
			window.addEventListener('todoAdded', function (event) {
				return (0, _tooListeners.todoAddlistener)(self.todoList);
			});
		}
	}]);

	return TodoContainer;
}();

},{"../listeners/too-listeners":2,"./todo-input-area":8,"./todo-list":9}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TodoInput = undefined;

var _singleTodo = require('../models/single-todo');

var _localStorageService = require('../service/local-storage-service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoInput = exports.TodoInput = function () {
	function TodoInput() {
		_classCallCheck(this, TodoInput);

		this.storage = new _localStorageService.LocalStorage();
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
			if (text == '') {
				TodoInput.addErrorMessage('Please type the todo here');
				return;
			}
			var todo = new _singleTodo.Todo(text);
			$('#todoinput').val('');
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

},{"../models/single-todo":3,"../service/local-storage-service":4}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TodoList = undefined;

var _localStorageService = require('../service/local-storage-service');

var _singleTodoItem = require('./single-todo-item');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;

var itemPerPage = 5;
var currentPage = 1;

var TodoList = exports.TodoList = function () {
	function TodoList() {
		_classCallCheck(this, TodoList);

		if (!instance) {
			instance = this;
		}
		this.storage = new _localStorageService.LocalStorage();
		TodoList.currentPage = 1;
		return instance;
	}

	_createClass(TodoList, [{
		key: 'getTemplate',
		value: function getTemplate() {
			this.storage = new _localStorageService.LocalStorage();

			var startIndex = itemPerPage * (TodoList.currentPage - 1);
			var endIndex = itemPerPage * TodoList.currentPage;

			var list = this.storage.getTotalData();
			var pagedList = list.reverse().slice(startIndex, endIndex);
			var template = '<ul type="none" class="list-group" id="todo-list-items">';
			for (var i = 0; i < pagedList.length; i++) {
				var tempTodo = new _singleTodoItem.SingleTodoItem(pagedList[i]);
				template += tempTodo.getTemplate();
			}
			template += '</ul>';
			if (list.length > itemPerPage) {
				template += '<nav>\n\t\t\t\t\t  <ul class="pagination">\n\t\t\t\t\t    <li class="' + this.getClass(1, 'disabled') + '">\n\t\t\t\t\t      <a href="javascript:void(0);" aria-label="Previous">\n\t\t\t\t\t        <span aria-hidden="true">&laquo;</span>\n\t\t\t\t\t      </a>\n\t\t\t\t\t    </li>';
				for (var i = 1; i <= list.length / itemPerPage; i++) {
					template += '<li class="' + this.getClass(i, 'active') + '">\n\t\t\t\t\t\t\t\t<a href="javascript:void(0);">' + i + '</a>\n\t\t\t\t\t\t\t</li>';
				}
				template += '<li class="' + this.getClass(list.length / itemPerPage, 'disabled') + '">\n\t\t\t\t\t      <a href="javascript:void(0);" aria-label="Next">\n\t\t\t\t\t        <span aria-hidden="true">&raquo;</span>\n\t\t\t\t\t      </a>\n\t\t\t\t\t    </li>\n\t\t\t\t\t  </ul>\n\t\t\t\t\t</nav>';
			}
			return template;
		}
	}, {
		key: 'getClass',
		value: function getClass(no, className) {
			if (no == TodoList.currentPage) {
				return className;
			}
			return '';
		}
	}]);

	return TodoList;
}();

},{"../service/local-storage-service":4,"./single-todo-item":6}],"mynamespace":[function(require,module,exports){
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

},{"./templates/header":5,"./templates/todo-container":7}]},{},["mynamespace",1,2,3,4,5,6,7,8,9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9iYXNlL2xpYi5qcyIsInNyYy9zY3JpcHRzL2xpc3RlbmVycy90b28tbGlzdGVuZXJzLmpzIiwic3JjL3NjcmlwdHMvbW9kZWxzL3NpbmdsZS10b2RvLmpzIiwic3JjL3NjcmlwdHMvc2VydmljZS9sb2NhbC1zdG9yYWdlLXNlcnZpY2UuanMiLCJzcmMvc2NyaXB0cy90ZW1wbGF0ZXMvaGVhZGVyLmpzIiwic3JjL3NjcmlwdHMvdGVtcGxhdGVzL3NpbmdsZS10b2RvLWl0ZW0uanMiLCJzcmMvc2NyaXB0cy90ZW1wbGF0ZXMvdG9kby1jb250YWluZXIuanMiLCJzcmMvc2NyaXB0cy90ZW1wbGF0ZXMvdG9kby1pbnB1dC1hcmVhLmpzIiwic3JjL3NjcmlwdHMvdGVtcGxhdGVzL3RvZG8tbGlzdC5qcyIsInNyYy9zY3JpcHRzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDQWdCLEdBQUcsR0FBSCxHQUFHO0FBQVosU0FBUyxHQUFHLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUFFLFNBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtDQUFFOzs7Ozs7OztRQ0EzQixlQUFlLEdBQWYsZUFBZTtBQUF4QixTQUFTLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRTtBQUNqRCxFQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztDQUN6RDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FELElBQU0sS0FBSyxHQUFHLHlCQUZOLFlBQVksRUFFWSxDQUFDOztJQUVwQixJQUFJLFdBQUosSUFBSTtBQUNoQixVQURZLElBQUksQ0FDSixJQUFJLEVBQUU7d0JBRE4sSUFBSTs7QUFFZixNQUFJLENBQUMsSUFBSSxHQUFHO0FBQ1gsT0FBSSxFQUFDLElBQUk7QUFD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QyxFQUFFLEVBQUU7QUFDN0MsYUFBUSxvQkFBa0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsUUFBUSxDQUFDLDBEQUNmLENBQUMsOEJBQzVCLENBQUM7S0FDVjtBQUNELFlBQVEsb0JBQWtCLElBQUksQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLG9OQU1wRSxDQUFDO0lBQ1Y7QUFDRCxVQUFPLFFBQVEsQ0FBQztHQUNoQjs7OzJCQUVRLEVBQUUsRUFBQyxTQUFTLEVBQUU7QUFDdEIsT0FBRyxFQUFFLElBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRTtBQUM1QixXQUFPLFNBQVMsQ0FBQztJQUNqQjtBQUNELFVBQU8sRUFBRSxDQUFDO0dBQ1Y7OztRQXJEVyxRQUFROzs7Ozs7Ozs7O0FDTHJCLFNBQVMsUUFBUSxHQUFHO0FBQ25CLEtBQUksTUFBTSxHQUFHLFlBSk4sTUFBTSxDQUlXLGtCQUFrQixDQUFDLENBQUM7QUFDNUMsS0FBSSxhQUFhLEdBQUcsbUJBSmIsYUFBYSxFQUltQixDQUFDO0FBQ3hDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDeEMsRUFBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUNqRCxjQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7Q0FDM0I7QUFDRCxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gc3VtICh4LCB5KSB7IHJldHVybiB4ICsgeSB9IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZG9BZGRsaXN0ZW5lcih0b2RvTGlzdFRlbXBsYXRlKSB7XG5cdCQoJyNhbGxfdG9kb19saXN0JykuaHRtbCh0b2RvTGlzdFRlbXBsYXRlLmdldFRlbXBsYXRlKCkpO1xufSIsImltcG9ydCB7TG9jYWxTdG9yYWdlfSBmcm9tICcuLi9zZXJ2aWNlL2xvY2FsLXN0b3JhZ2Utc2VydmljZSc7XG5cbmNvbnN0IHN0b3JlID0gbmV3IExvY2FsU3RvcmFnZSgpO1xuXG5leHBvcnQgY2xhc3MgVG9kbyB7XG5cdGNvbnN0cnVjdG9yKHRleHQpIHtcblx0XHR0aGlzLnRvZG8gPSB7XG5cdFx0XHR0ZXh0OnRleHQsXG5cdFx0XHR0aW1lOiBuZXcgRGF0ZSgpLFxuXHRcdFx0Y29tcGxldGVkOiBmYWxzZVxuXHRcdH07XG5cdFx0c3RvcmUuYWRkRGF0YSh0aGlzLnRvZG8pO1xuXHR9XG5cblx0YWRkSWQoaWQpIHtcblx0XHR0aGlzLnRvZG8uaWQgPSBpZDtcblx0fVxuXG5cdGdldFRvZG8oKSB7XG5cdFx0cmV0dXJuIHRoaXMudG9kbztcblx0fVxuXG5cdHNldENvbXBsZXRlZChpc0NvbXBsZXRlZCkge1xuXHRcdHRoaXMudG9kby5jb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcblx0fVxufSIsImNvbnN0IHN0b3JhZ2VOYW1lID0gJ215dG9kb3MnO1xuXG5sZXQgaW5zdGFuY2UgPSBudWxsO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlIHtcblx0XG5cdC8qKlxuXHQgKiBDcmVhdGUgdGhlIExvY2FsU3RvcmFnZSBjbGFzcyB3aXRoIGEgc3BlY2lmaWMgc3RvcmFnZSBuYW1lXG5cdCAqIGRlZmF1bHQgZm9ybWF0IGlzLCB0aGUgZGF0YSBpcyBhbiBhcnJheVxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9IHN0b3JhZ2VOYW1lIE5hbWUgb2YgdGhlIHN0b3JhZ2Vcblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGlmKCFpbnN0YW5jZSkge1xuXHRcdFx0aW5zdGFuY2UgPSB0aGlzO1xuXHRcdH1cblx0XHRpZighd2luZG93LmxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShzdG9yYWdlTmFtZSkpIHtcblx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Vbc3RvcmFnZU5hbWVdID0gSlNPTi5zdHJpbmdpZnkoW10pO1xuXHRcdH1cblx0XHR0aGlzLnN0b3JhZ2UgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2Vbc3RvcmFnZU5hbWVdKTtcblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB3aG9sZSBkYXRhIGZyb20gdGhlIHN0b3JhZ2Vcblx0ICogQHJldHVybiB7T2JqZWN0fSBUaGUgZGF0YSBmcm9tIHRoZSBzdG9yYWdlXG5cdCAqL1xuXHRnZXRUb3RhbERhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmFnZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnNlcnQgYSBuZXcgZGF0YSBhdCBpbmRleCwgaWYgaW5kZXggcHJvdmlkZWQsIG90aGVlcndpc2UgXG5cdCAqIGF0IGxhc3QgcG9zaXRpb24sIGFuIGlkIHdpbGwgYmUgZ2VuZXJhdGVkLCBmb3JtYXQgaXNcblx0ICoge2lkOmlkLGRhdGE6ZGF0YX1cblx0ICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCB0aGUgb2JqZWN0IHRvIGFkZCB0byB0aGUgc3RvcmFnZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggIGluZGV4IG9mIGluc2VydGlvbiwgZGVmYXVsdCAtMVxuXHQgKi9cblx0YWRkRGF0YShvYmplY3QpIHtcblx0XHRjb25zb2xlLmxvZygnaW4gc2VydmljZScsb2JqZWN0KTtcblx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0bGV0IG9iamVjdElEID0gJ2lkXycrdGhpcy5zdG9yYWdlLmxlbmd0aCsnXycrZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcblxuXHRcdHRoaXMuc3RvcmFnZS5wdXNoKHtcblx0XHRcdGlkOm9iamVjdElELFxuXHRcdFx0ZGF0YTpvYmplY3Rcblx0XHR9KTtcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlW3N0b3JhZ2VOYW1lXSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmFnZSk7XG5cdFx0dGhpcy51cGRhdGVDb250YWluZXIoJ3RvZG9BZGRlZCcpO1xuXHR9XG5cblx0ZGVsZXRlRGF0YShpZCkge1xuXHRcdGlmKHRoaXMuc3RvcmFnZS5sZW5ndGg9PT0wKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdH1cblxuXHR1cGRhdGVDb250YWluZXIoZXZlbnROYW1lKSB7XG5cdFx0bGV0IHVwZGF0ZUV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50TmFtZSk7XG5cdFx0d2luZG93LmRpc3BhdGNoRXZlbnQodXBkYXRlRXZlbnQpO1xuXHR9XG59IiwiZXhwb3J0IGNsYXNzIEhlYWRlciB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGUoKSB7XG5cdFx0cmV0dXJuIGA8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTMgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxoMj48bGFiZWwgY2xhc3M9XCJsYWJlbCBsYWJlbC1zdWNjZXNzXCI+JHt0aGlzLnRpdGxlfTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5gO1xuXHR9XG59IiwiaW1wb3J0IHtMb2NhbFN0b3JhZ2V9IGZyb20gJy4uL3NlcnZpY2UvbG9jYWwtc3RvcmFnZS1zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFNpbmdsZVRvZG9JdGVtIHtcblx0Y29uc3RydWN0b3IodG9kbykge1xuXHRcdHRoaXMudG9kbyA9IHRvZG87XG5cdH1cblxuXHRnZXRUZW1wbGF0ZSgpIHtcblx0XHRyZXR1cm4gYDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuXHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDxsYWJlbCBjbGFzcz1cImxhYmVsIGxhYmVsLWRlZmF1bHRcIj5cblx0XHRcdFx0XHQke3RoaXMudG9kby5kYXRhLnRleHR9XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDwvbGk+YDtcblx0fVxufVxuIiwiaW1wb3J0IHtUb2RvSW5wdXR9IGZyb20gJy4vdG9kby1pbnB1dC1hcmVhJztcbmltcG9ydCB7VG9kb0xpc3R9IGZyb20gJy4vdG9kby1saXN0JztcbmltcG9ydCB7dG9kb0FkZGxpc3RlbmVyfSBmcm9tICcuLi9saXN0ZW5lcnMvdG9vLWxpc3RlbmVycyc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvQ29udGFpbmVyIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnRvZG9JbnB1dCA9IG5ldyBUb2RvSW5wdXQoKTtcblx0XHR0aGlzLnRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5cdH1cblxuXHRnZXRUZW1wbGF0ZSgpIHsgXG5cdFx0bGV0IHRlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjb2wtbWQtMTJcIj5cblx0XHRcdFx0XHRcdFx0JHt0aGlzLnRvZG9JbnB1dC5nZXRUZW1wbGF0ZSgpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PmA7XG5cdFx0dGVtcGxhdGUgKz0gYDxkaXYgaWQ9XCJhbGxfdG9kb19saXN0XCI+XG5cdFx0XHRcdFx0XHQke3RoaXMudG9kb0xpc3QuZ2V0VGVtcGxhdGUoKX1cblx0XHRcdFx0XHQ8L2Rpdj5gO1xuXHRcdHRoaXMuYWRkVG9kb0FkZExpc3RlbmVycygpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0fVxuXG5cdGJpbmRFdmVudHMoKSB7XG5cdFx0dGhpcy50b2RvSW5wdXQuYmluZEFkZEJ1dHRvbkV2ZW50KCk7XG5cdH1cblxuXHRhZGRUb2RvQWRkTGlzdGVuZXJzKCkge1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG9kb0FkZGVkJyxmdW5jdGlvbihldmVudCl7XG5cdFx0XHRyZXR1cm4gdG9kb0FkZGxpc3RlbmVyKHNlbGYudG9kb0xpc3QpO1xuXHRcdH0pO1xuXHR9XG59IiwiaW1wb3J0IHtUb2RvfSBmcm9tICcuLi9tb2RlbHMvc2luZ2xlLXRvZG8nO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2V9IGZyb20gJy4uL3NlcnZpY2UvbG9jYWwtc3RvcmFnZS1zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFRvZG9JbnB1dCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuc3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2UoKTtcblx0fVxuXHRnZXRUZW1wbGF0ZSgpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgdG9kby1pbnB1dFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGNvbC1tZC00IGNvbC1tZC1vZmZzZXQtNFwiIGlkPVwiaW5wdXQtYXJlYVwiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInNtLWZvcm0tY29udHJvbFwiIGlkPVwidG9kb2lucHV0XCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjb2wtbWQtMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGlkPVwiaW5wdXRBZGRCdXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkFkZDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PmA7XG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHR9XG5cblx0YmluZEFkZEJ1dHRvbkV2ZW50KCkge1xuXHRcdCQoJyNpbnB1dEFkZEJ1dHRvbicpLmJpbmQoJ2NsaWNrJywgdGhpcy5hZGRUb2RvKTtcblx0XHQkKCcjdG9kb2lucHV0JykuYmluZCgna2V5cHJlc3MnLCB0aGlzLnRvZG9UZXh0VHlwZSk7XG5cdH1cblxuXHRzdGF0aWMgYWRkRXJyb3JNZXNzYWdlKG1zZykge1xuXHRcdCQoJyNpbnB1dC1hcmVhJykuYXBwZW5kKCc8cD4nK21zZysnPC9wPicpLnNob3coJ3Nsb3cnKTtcblx0fVxuXG5cdHN0YXRpYyByZW1vdmVFcnJvck1lc3NhZ2UoKSB7XG5cdFx0JCgnI2lucHV0LWFyZWE+cCcpLmhpZGUoJ3Nsb3cnKTtcblx0fVxuXG5cdHRvZG9UZXh0VHlwZSgpIHtcblx0XHRUb2RvSW5wdXQucmVtb3ZlRXJyb3JNZXNzYWdlKCk7XG5cdH1cblxuXHRhZGRUb2RvKCkge1xuXHRcdGxldCB0ZXh0ID0gJCgnI3RvZG9pbnB1dCcpLnZhbCgpO1xuXHRcdGlmKHRleHQ9PScnKSB7XG5cdFx0XHRUb2RvSW5wdXQuYWRkRXJyb3JNZXNzYWdlKCdQbGVhc2UgdHlwZSB0aGUgdG9kbyBoZXJlJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCB0b2RvID0gbmV3IFRvZG8odGV4dCk7XG5cdFx0JCgnI3RvZG9pbnB1dCcpLnZhbCgnJyk7XG5cdH1cbn0iLCJpbXBvcnQge0xvY2FsU3RvcmFnZX0gZnJvbSAnLi4vc2VydmljZS9sb2NhbC1zdG9yYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHtTaW5nbGVUb2RvSXRlbX0gZnJvbSAnLi9zaW5nbGUtdG9kby1pdGVtJztcblxubGV0IGluc3RhbmNlID0gbnVsbDtcblxuY29uc3QgaXRlbVBlclBhZ2UgPSA1O1xubGV0IGN1cnJlbnRQYWdlID0gMTtcblxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0aWYoIWluc3RhbmNlKSB7XG5cdFx0XHRpbnN0YW5jZSA9IHRoaXM7XG5cdFx0fVxuXHRcdHRoaXMuc3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2UoKTtcblx0XHRUb2RvTGlzdC5jdXJyZW50UGFnZSA9IDE7XG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0Z2V0VGVtcGxhdGUoKSB7XG5cdFx0dGhpcy5zdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgpO1xuXHRcdFxuXHRcdGxldCBzdGFydEluZGV4ID0gaXRlbVBlclBhZ2UqKFRvZG9MaXN0LmN1cnJlbnRQYWdlLTEpO1xuXHRcdGxldCBlbmRJbmRleCA9IGl0ZW1QZXJQYWdlKihUb2RvTGlzdC5jdXJyZW50UGFnZSk7XG5cblx0XHRsZXQgbGlzdCA9IHRoaXMuc3RvcmFnZS5nZXRUb3RhbERhdGEoKTtcblx0XHRsZXQgcGFnZWRMaXN0ID0gbGlzdC5yZXZlcnNlKCkuc2xpY2Uoc3RhcnRJbmRleCxlbmRJbmRleCk7XG5cdFx0bGV0IHRlbXBsYXRlID0gJzx1bCB0eXBlPVwibm9uZVwiIGNsYXNzPVwibGlzdC1ncm91cFwiIGlkPVwidG9kby1saXN0LWl0ZW1zXCI+Jztcblx0XHRmb3IobGV0IGk9MDtpPHBhZ2VkTGlzdC5sZW5ndGg7aSsrKSB7XG5cdFx0XHRcdGxldCB0ZW1wVG9kbyA9IG5ldyBTaW5nbGVUb2RvSXRlbShwYWdlZExpc3RbaV0pO1xuXHRcdFx0XHR0ZW1wbGF0ZSArPSB0ZW1wVG9kby5nZXRUZW1wbGF0ZSgpO1xuXHRcdH1cblx0XHR0ZW1wbGF0ZSArPSAnPC91bD4nO1xuXHRcdGlmKGxpc3QubGVuZ3RoPml0ZW1QZXJQYWdlKSB7XG5cdFx0XHR0ZW1wbGF0ZSArPSBgPG5hdj5cblx0XHRcdFx0XHQgIDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cblx0XHRcdFx0XHQgICAgPGxpIGNsYXNzPVwiJHt0aGlzLmdldENsYXNzKDEsJ2Rpc2FibGVkJyl9XCI+XG5cdFx0XHRcdFx0ICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIj5cblx0XHRcdFx0XHQgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsYXF1bzs8L3NwYW4+XG5cdFx0XHRcdFx0ICAgICAgPC9hPlxuXHRcdFx0XHRcdCAgICA8L2xpPmA7XG5cdFx0XHRmb3IobGV0IGk9MTtpPD0obGlzdC5sZW5ndGgvaXRlbVBlclBhZ2UpO2krKykge1xuXHRcdFx0XHR0ZW1wbGF0ZSArPSBgPGxpIGNsYXNzPVwiJHt0aGlzLmdldENsYXNzKGksJ2FjdGl2ZScpfVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+JHtpfTwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5gO1xuXHRcdFx0fVxuXHRcdFx0dGVtcGxhdGUgKz0gYDxsaSBjbGFzcz1cIiR7dGhpcy5nZXRDbGFzcygobGlzdC5sZW5ndGgvaXRlbVBlclBhZ2UpLCdkaXNhYmxlZCcpfVwiPlxuXHRcdFx0XHRcdCAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgYXJpYS1sYWJlbD1cIk5leHRcIj5cblx0XHRcdFx0XHQgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XG5cdFx0XHRcdFx0ICAgICAgPC9hPlxuXHRcdFx0XHRcdCAgICA8L2xpPlxuXHRcdFx0XHRcdCAgPC91bD5cblx0XHRcdFx0XHQ8L25hdj5gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdH1cblxuXHRnZXRDbGFzcyhubyxjbGFzc05hbWUpIHtcblx0XHRpZihubz09VG9kb0xpc3QuY3VycmVudFBhZ2UpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWU7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fVxufVxuIiwiaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4vdGVtcGxhdGVzL2hlYWRlcic7XG5pbXBvcnQge1RvZG9Db250YWluZXJ9IGZyb20gJy4vdGVtcGxhdGVzL3RvZG8tY29udGFpbmVyJztcblxuZnVuY3Rpb24gc3RhcnRBcHAoKSB7XG5cdGxldCBoZWFkZXIgPSBuZXcgSGVhZGVyKCdTaW1wbGUgdG9kbyBMaXN0Jyk7XG5cdGxldCBtYWluQ29udGFpbmVyID0gbmV3IFRvZG9Db250YWluZXIoKTtcblx0JCgnI2hlYWRlcicpLmh0bWwoaGVhZGVyLmdldFRlbXBsYXRlKCkpO1xuXHQkKCcjdG9kb19hcHAnKS5odG1sKG1haW5Db250YWluZXIuZ2V0VGVtcGxhdGUoKSk7XG5cdG1haW5Db250YWluZXIuYmluZEV2ZW50cygpO1xufVxuc3RhcnRBcHAoKTsiXX0=

//# sourceMappingURL=app.js.map
