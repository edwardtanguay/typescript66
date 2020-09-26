class Site {
	get title() {
		return 'TypeScript/SASS Site';
	}
	get content() {
		let r = ''; 

		r += `<div style="padding: 10px;background-color:#ccc;margin-bottom:20px"><h3>Welcome developer:</h3><ul>
		<li>this site is a learning and experimentation zone for TypeScript and SASS</li>
		<li>search for <code>// TOUR</code> to take a tour of highlights</li>
		<li>to develop it as a site of your own, see the <b>README.md</b> file</li>
		</ul></div>`;

		// TOUR: define an enum 
		let status: Status = Status.Online;
		const sdf = 34;

		// TOUR: literal types
		let mainColor: 'navy' | 'green' | 'purple';
		mainColor = 'green';

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
		const dataReader = new DataReader();
		dataReader.getQuotes().forEach((m) => {
			r += `<li style="color: ${mainColor}">${m}</li>`;
		});
		r += `</ul>`;

		r += '<hr/>';

		r += dataReader.showFlaschard({ front: 'house', back: 'Haus' });
		r += dataReader.showFlaschard({ front: 'mouse', back: 'Maus' });

		r += '<hr/>';

		r += `The score is ${score}.`;

		return r;
	}
}

// === SITE LOADER AREA =================================

const siteLoader = (option = '') => {
	if (option === '') {
		const site = new Site();
		return site;
	} else {
		const site = new StartSite();
		return site;
	}
};

class StartSite {
	get title() {
		return 'Welcome';
	}
	get content() {
		return 'Welcome to this site.';
	}
}

// === QTOOLS ===================

class qtools_qstr {
	capitalizeFirstLetter(line: string) {
		return line.charAt(0).toUpperCase() + line.slice(1);
	}
}

class qtools_qmat {
	getRandomNumber(start: number, end: number) {
		return Math.floor(Math.random() * end) + start;
	}
}

const qstr = new qtools_qstr();
const qmat = new qtools_qmat();


// === DATA ===================

class DataReader {
	getQuotes() {
		return [
			'this one',
			'that one',
			'another one',
			'fourth one',
			'fifth one'
		];
	}

	// TOUR: define custom parameter type
	showFlaschard(flashcard: IFlashcard) {
		return `<div>${flashcard.front} <=> ${flashcard.back}</div>`;
	}

	// TOUR: define return type
	getFlashcard(): IFlashcard { 
		return {
			front: 'fff',
			back: 'bbb'
		};
	}
}
