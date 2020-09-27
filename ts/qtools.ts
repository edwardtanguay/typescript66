namespace qstr {
	export function capitalizeFirstLetter(line: string) {
		return line.charAt(0).toUpperCase() + line.slice(1);
	}
}

namespace qmat {
	export function getRandomNumber(start: number, end: number) {
		return Math.floor(Math.random() * end) + start;
	}
}

namespace qobj {
	export function clone(obj) {
		let serialized = JSON.stringify(obj);
		return JSON.parse(serialized);
	}
}