import {LocalStorage} from '../service/local-storage-service';
import {SingleTodoItem} from './single-todo-item';

let instance = null;

const itemPerPage = 5;
let currentPage = 1;

export class TodoList {
	constructor() {
		if(!instance) {
			instance = this;
		}
		this.storage = new LocalStorage();
		TodoList.currentPage = 1;
		return instance;
	}

	getTemplate() {
		this.storage = new LocalStorage();
		
		let startIndex = itemPerPage*(TodoList.currentPage-1);
		let endIndex = itemPerPage*(TodoList.currentPage);

		let list = this.storage.getTotalData();
		let pagedList = list.reverse().slice(startIndex,endIndex);
		let template = '<ul type="none" class="list-group" id="todo-list-items">';
		for(let i=0;i<pagedList.length;i++) {
				let tempTodo = new SingleTodoItem(pagedList[i]);
				template += tempTodo.getTemplate();
		}
		template += '</ul>';
		if(list.length>itemPerPage) {
			template += `<nav>
					  <ul class="pagination">
					    <li class="${this.getClass(1,'disabled')}">
					      <a href="javascript:void(0);" aria-label="Previous">
					        <span aria-hidden="true">&laquo;</span>
					      </a>
					    </li>`;
			for(let i=1;i<=(list.length/itemPerPage);i++) {
				template += `<li class="${this.getClass(i,'active')}">
								<a href="javascript:void(0);">${i}</a>
							</li>`;
			}
			template += `<li class="${this.getClass((list.length/itemPerPage),'disabled')}">
					      <a href="javascript:void(0);" aria-label="Next">
					        <span aria-hidden="true">&raquo;</span>
					      </a>
					    </li>
					  </ul>
					</nav>`;
		}
		return template;
	}

	getClass(no,className) {
		if(no==TodoList.currentPage) {
			return className;
		}
		return '';
	}
}
