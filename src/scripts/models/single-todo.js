import {LocalStorage} from '../service/local-storage-service';

const store = new LocalStorage();

export class Todo {
	constructor(text) {
		this.todo = {
			text:text,
			time: new Date(),
			completed: false
		};
		store.addData(this.todo);
	}

	addId(id) {
		this.todo.id = id;
	}

	getTodo() {
		return this.todo;
	}

	setCompleted(isCompleted) {
		this.todo.completed = isCompleted;
	}
}