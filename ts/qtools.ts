namespace qstr {
	export function capitalizeFirstLetter(line: string) {
		return line.charAt(0).toUpperCase() + line.slice(1);
	}
	// TOUR: type unknown
	export function isString(line: unknown): boolean {
		return 'string' === typeof line;
	}
}

namespace qmat {
	export function getRandomNumber(start: number, end: number): number {
		return Math.floor(Math.random() * end) + start;
	}
}

namespace qobj {

	// TOUR: function with generics
	export function clone<T>(value: T): T {
		console.log(typeof value);
		let serialized = JSON.stringify(value);
		return JSON.parse(serialized);
	}
}