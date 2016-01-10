import {TodoInput} from './todo-input-area';
import {TodoList} from './todo-list';
import {todoAddlistener} from '../listeners/too-listeners';

export class TodoContainer {

	constructor() {
		this.todoInput = new TodoInput();
		this.todoList = new TodoList();
	}

	getTemplate() { 
		let template = `<div class="row">
							<div class="col-sm-12 col-md-12">
							${this.todoInput.getTemplate()}
							</div>
						</div>`;
		template += `<div id="all_todo_list">
						${this.todoList.getTemplate()}
					</div>`;
		this.addTodoAddListeners();
		return template;
	}

	bindEvents() {
		this.todoInput.bindAddButtonEvent();
	}

	addTodoAddListeners() {
		let self = this;
		window.addEventListener('todoAdded',function(event){
			return todoAddlistener(self.todoList);
		});
	}
}