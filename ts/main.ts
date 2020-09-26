const app = () => { 
	let r = '';

	// enum
	let status: Status = Status.Online;

	// literal type
	let mainColor: 'navy' | 'green' | 'purple';
	mainColor = "green";

	let rand = qmat_getRandomNumber(1,2);
	if (rand === 1) {
		status = Status.Offline
	} else {
		status = Status.Online;
	}

    if (status === Status.Offline) {
        r += qstr_capitalizeFirstLetter('Status is offline.');
    } else {
        r += qstr_capitalizeFirstLetter('Status is online.');
	}
	
	r += '<hr/>';

	r += `<ul>`;
	const dataReader = new DataReader();
	dataReader.getQuotes().forEach(m => {
		r += `<li style="color: ${mainColor}">${m}</li>`;
	});
	r += `</ul>`;

	return r;
};

// =========================================================

const qstr_capitalizeFirstLetter = (line: string) => {
    return line.charAt(0).toUpperCase() + line.slice(1);
};
const qmat_getRandomNumber = (start:number, end:number) => {
	return Math.floor(Math.random() * end) + start;
};

// enum
enum Status {
    Online,
    Offline
}

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
}
