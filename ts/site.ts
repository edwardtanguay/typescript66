namespace app {

	export class Site {

		// TOUR: in TypeScript classes, you need to define private variables outside the constructor
		private _title: string;
		private _content: string;
		private _quotes: string[];

		get title() { return this._title; }
		get content() { return this._content; }

		constructor() {
			this._title = 'TypeScript/SASS Site';
			this._content = '';
			this._loadData();
			this.buildContent();
		}

		buildContent(): void {
			this._content += `<div style="padding: 10px;background-color:#ccc;margin-bottom:20px"><h3>Welcome developer:</h3><ul>
		<li>this site is a learning and experimentation zone for TypeScript and SASS</li>
		<li>search for <code>tour:</code> to take a tour of highlights</li>
		<li>to use this it as a site of your own, see the <b>README.md</b> file</li>
		</ul></div>`;

			// TOUR: define an enum 
			let status: Status = Status.Online;
			const sdf = 34;

			// TOUR: literal types
			let mainColor: 'navy' | 'brown' | 'purple';
			mainColor = 'brown';

			// TOUR: union type, can be either type
			type FlexibleScore = number | string;
			let score: FlexibleScore;
			score = 55;
			score = 'five';
			if (typeof score === 'string') {
				score = `"${score}"`;
			}

			let rand = qmat.getRandomNumber(1, 2);
			if (rand === 1) {
				status = Status.Offline;
			} else {
				status = Status.Online;
			}

			//TOUR: you can define readonly on Types
			interface ICustomer {
				readonly id: number,
				firstName: string,
				lastName: string,
				description?: string
			}
			const customer: ICustomer = {
				id: 34,
				firstName: 'Fritz',
				lastName: 'Haber',
				description: 'chemist'
			}
			customer.lastName = 'unknown';
			// customer.id = 343; TypeScript won't allow this


			// TOUR: how to use an enum, works in intellisense
			if (status === Status.Offline) {
				this._content += qstr.capitalizeFirstLetter('Status is offline.');
			} else {
				this._content += qstr.capitalizeFirstLetter('Status is online.');
			}

			this._addLine();

			this._content += `<ul>`;
			const dataSource = new DataSource();
			this._quotes.forEach((m) => {
				this._content += `<li style="color: ${mainColor}">${m}</li>`;
			});
			this._content += `</ul>`;

			this._addLine();

			this._content += dataSource.showFlashcard({ front: 'house', back: 'Haus' });
			this._content += dataSource.showFlashcard({ front: 'mouse', back: 'Maus' });

			this._addLine();

			this._content += `The score is ${score}.`;

			this._addLine();

			this._content += `Number of quotes = ${this._quotes.length}`;

			this._addLine();

			this._content += `The version of the dataSource is <code>${DataSource.getVersion()}</code>, retrieved from a static method.`;

			this._addLine();

			// serialize object
			const obj1 = {
				firstName: 'Jawaharlal',
				lastName: 'Nehru'
			}
			const obj2 = qobj.clone(obj1);
			obj2.firstName = '(unknown)';
			this._content += `<div>obj1.firstName = "${obj1.firstName}"</div>`;
			this._content += `<div>obj2.firstName = "${obj2.firstName}"</div>`;

			this._addLine();
		}

		_addLine(): void {
			this._content += `<hr/>`;
		}

		_loadData(): void {
			const dataSource = new DataSource();
			this._quotes = dataSource.getQuotes();
		}

	}

}