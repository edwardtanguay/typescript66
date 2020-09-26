class Site {
	get title() {
		return 'TypeScript/SASS Site';
	}
	get content() {
		let r = ''; 

		r += `<div style="padding: 10px;background-color:#ccc;margin-bottom:20px"><h3>Welcome developer:</h3><ul>
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
			r += qstr.capitalizeFirstLetter('Status is offline.');
		} else {
			r += qstr.capitalizeFirstLetter('Status is online.');
		}

		r += '<hr/>';

		r += `<ul>`;
		const dataSource = new DataSource();
		dataSource.getQuotes().forEach((m) => {
			r += `<li style="color: ${mainColor}">${m}</li>`;
		});
		r += `</ul>`;

		r += '<hr/>';

		r += dataSource.showFlashcard({ front: 'house', back: 'Haus' });
		r += dataSource.showFlashcard({ front: 'mouse', back: 'Maus' });

		r += '<hr/>';

		r += `The score is ${score}.`;

		return r;
	}
}