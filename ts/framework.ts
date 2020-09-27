
namespace framework {

	export const siteLoader = (option = '') => {
		if (option === '') {
			const site = new app.Site();
			return site;
		} else {
			const site = new framework.StartSite();
			return site;
		}
	};

	export class StartSite {
		get title() {
			return 'Welcome';
		}
		get content() {
			return 'Welcome to this site.';
		}
	}

	export class KeyValuePair<TKey, TValue> {
		constructor(
			public key: TKey,
			public value: TValue
		) {}
	}

	// TOUR: private/public constructor parameters
	export class Person {
		constructor(public _firstName: string, private _lastName: string) { }
		display(): string {
			return `PERSON: "${this._lastName}, ${this._firstName}"`;
		}
	}

}