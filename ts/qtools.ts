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