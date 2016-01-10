import {Header} from './templates/header';
import {TodoContainer} from './templates/todo-container';

function startApp() {
	let header = new Header('Simple todo List');
	let mainContainer = new TodoContainer();
	$('#header').html(header.getTemplate());
	$('#todo_app').html(mainContainer.getTemplate());
	mainContainer.bindEvents();
}

startApp();