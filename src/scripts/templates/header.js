export class Header {
	constructor(title) {
		this.title = title;
	}

	getTemplate() {
		return `<div class="row">
					<div class="col-sm-12 col-md-6 col-md-offset-3 text-center">
						<h2><label class="label label-success">${this.title}</label>
						</h2>
					</div>
				</div>`;
	}
}