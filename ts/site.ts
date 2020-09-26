class Site {

	_title;
	_content;

	get title() { return this._title; }
	get content() { return this._content; }

	constructor() {
		this._title = 'TypeScript/SASS Site';
		this._content = '';
		this.buildContent();
	}

	buildContent() {
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

		// TOUR: how to use an enum, works in intellisense
		if (status === Status.Offline) {
			this._content += qstr.capitalizeFirstLetter('Status is offline.');
		} else {
			this._content += qstr.capitalizeFirstLetter('Status is online.');
		}

		this.addLine();

		this._content += `<ul>`;
		const dataSource = new DataSource();
		dataSource.getQuotes().forEach((m) => {
			this._content += `<li style="color: ${mainColor}">${m}</li>`;
		});
		this._content += `</ul>`;

		this.addLine();

		this._content += dataSource.showFlashcard({ front: 'house', back: 'Haus' });
		this._content += dataSource.showFlashcard({ front: 'mouse', back: 'Maus' });

		this.addLine();

		this._content += `The score is ${score}.`;

		this.addLine();
	}

	addLine() {
		this._content += `<hr/>`;
	}

}