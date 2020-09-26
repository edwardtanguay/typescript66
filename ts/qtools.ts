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