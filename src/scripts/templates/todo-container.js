import {TodoInput} from './todo-input-area';

export class TodoContainer {

	constructor() {
		this.todoInput = new TodoInput();
	}

	getTemplate() { 
		let template = `<div class="row">
							<div class="col-sm-12 col-md-12">
							${this.todoInput.getTemplate()}
							</div>
						</div>`;
		return template;
	}

	bindEvents() {
		this.todoInput.bindAddButtonEvent();
	}
}