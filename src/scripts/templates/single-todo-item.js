import {LocalStorage} from '../service/local-storage-service';

export class SingleTodoItem {
	constructor(todo) {
		this.todo = todo;
	}

	getTemplate() {
		return `<li class="list-group-item">
				<span>
					<i class="fa fa-check"></i>
				</span>
				<label class="label label-default">
					${this.todo.data.text}
				</label>
				</li>`;
	}
}
