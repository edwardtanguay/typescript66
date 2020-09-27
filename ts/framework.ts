
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

	// TOUR: generic classes
	export class KeyValuePair<TKey, TValue> {
		constructor(
			public key: TKey,
			public value: TValue
		) {}
	}
	export class KeyValuePairPrinter<T, U> {
		constructor(private pairs: KeyValuePair<T, U>[]) { }
		display(): string {
			let r = '';
			this.pairs.forEach(p => {
				r += `<div>${p.key}: ${p.value}</div>`;
			});
			return r;
		}
	}

	// TOUR: private/public constructor parameters
	export class Person {
		constructor(public _firstName: string, private _lastName: string) { }
		display(): string {
			return `PERSON: "${this._lastName}, ${this._firstName}"`;
		}
	}

	// TOUR: contraining generics
	export function totalLength<T extends { length: number}>(x: T, y: T): number {
		var total: number = x.length + y.length;
		return total;
	}

}