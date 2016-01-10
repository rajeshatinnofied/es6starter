export class TodoInput {
	getTemplate() {
		let template = `<div class="form-group todo-input">
							<div class="col-sm-12 col-md-4 col-md-offset-4" id="input-area">
							<input type="text" class="sm-form-control" id="todoinput"/>
							</div>
							<div class="col-sm-12 col-md-2">
							<button id="inputAddButton" class="btn btn-primary">Add</button>
							</div>
						</div>`;
		return template;
	}

	bindAddButtonEvent() {
		$('#inputAddButton').bind('click', this.addTodo);
		$('#todoinput').bind('keypress', this.todoTextType);
	}

	static addErrorMessage(msg) {
		$('#input-area').append('<p>'+msg+'</p>').show('slow');
	}

	static removeErrorMessage() {
		$('#input-area>p').hide('slow');
	}

	todoTextType() {
		TodoInput.removeErrorMessage();
	}

	addTodo() {
		let text = $('#todoinput').val();
		console.log('text is',text);
		if(text=='') {
			console.log('here');
			TodoInput.addErrorMessage('Please type the todo here');
		}
		console.log('Hii');
	}
}