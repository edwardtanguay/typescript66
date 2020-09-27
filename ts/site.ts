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
			this._addToContent(`<div style="padding: 10px;background-color:#ccc;margin-bottom:20px"><h3>Welcome developer:</h3><ul>
		<li>this site is a learning and experimentation zone for TypeScript and SASS</li>
		<li>search for <code>tour:</code> to take a tour of highlights</li>
		<li>to use this it as a site of your own, see the <b>README.md</b> file</li>
		</ul></div>`);

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
				this._addToContent(qstr.capitalizeFirstLetter('Status is offline.'));
			} else {
				this._addToContent(qstr.capitalizeFirstLetter('Status is online.'));
			}

			this._addSeparator();

			this._addToContent(`<ul>`, true);
			const dataSource = new DataSource();
			this._quotes.forEach((m) => {
				this._addToContent(`<li style="color: ${mainColor}">${m}</li>`, true);
			});
			this._addToContent(`</ul>`);

			this._addSeparator();

			this._addToContent(dataSource.showFlashcard({ front: 'house', back: 'Haus' }));
			this._addToContent(dataSource.showFlashcard({ front: 'mouse', back: 'Maus' }));

			this._addSeparator();

			this._addToContent(`The score is ${score}.`);

			this._addSeparator();

			this._addToContent(`Number of quotes = ${this._quotes.length}`);

			this._addSeparator();

			this._addToContent(`The version of the dataSource is <code>${DataSource.getVersion()}</code>, retrieved from a static method.`);

			this._addSeparator();

			// clone object
			const obj1 = {
				firstName: 'Jawaharlal',
				lastName: 'Nehru'
			}
			const obj2 = qobj.clone(obj1);
			obj2.firstName = '(unknown)';
			this._addToContent(`obj1.firstName = "${obj1.firstName}"`);
			this._addToContent(`obj2.firstName = "${obj2.firstName}"`);

			// TOUR: using function with generics
			const name = 'Andy';
			const name2 = qobj.clone(name);
			this._addToContent(`obj1.firstName = "${name}"`);
			this._addToContent(`obj2.firstName = "${name2}"`);

			this._addSeparator();

			// TOUR: an array is actually a generic class
			const numbers: number[] = [1, 2, 3, 4];
			const numbers2: Array<number> = [5, 6, 7, 8];
			this._addToContent(numbers.join('|'));
			this._addToContent(numbers2.reverse().join('-'));
			this._addSeparator();

			// TOUR: private/public constructor parameters
			const person = new framework.Person('Pierre', 'Bayle');
			person._firstName = '(unknown)';
			// person._lastName = '(unknown)'; // TypeScript warns that this is a private variable
			this._addToContent(person.display());
			this._addSeparator();

			// TOUR: generic classes
			const pair1 = new framework.KeyValuePair<number, string>(1, 'First');
			const pair2 = new framework.KeyValuePair<string, Date>('Second', new Date(Date.now()));
			const pair3 = new framework.KeyValuePair<number, string>(3, 'Third');
			const pairs = new framework.KeyValuePairPrinter([pair1, pair3]);
			// const pairs = new framework.KeyValuePairPrinter([pair1, pair3, pair2]); // TypeScript warns that pair2 does not have the same type signature
			this._addToContent(pairs.display());
			this._addSeparator();

			// TOUR: 	
			const measure1 = { name: "Measure 1", length: 453 };
			const measure2 = { name: "Measure 2", length: 47 };
			// const measure2: number[] = [2, 3, 4, 5, 6]; // TypeScript will warn that this is not the same type as measure1
			this._addToContent(framework.totalLength(measure1, measure2).toString());
			this._addSeparator();

		}

		_addSeparator(): void {
			this._content += `<hr/>`;
		}
		_addToContent(line: string, suppressDiv: boolean = false): void {
			if (suppressDiv) {
				this._content += `${line}`;
			} else {
				this._content += `<div>${line}</div>`;
			}
		}

		_loadData(): void {
			const dataSource = new DataSource();
			this._quotes = dataSource.getQuotes();
		}

	}

}