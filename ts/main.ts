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

	r += '<hr/>';

	r += dataReader.showFlaschard({ front: 'house', back: 'Haus' });
	r += dataReader.showFlaschard({ front: 'mouse', back: 'Maus' });

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

// interfaces
interface IFlashcard {
	front: string,
	back: string
	category?: string,
	display?: () => string
}

// ES6 class
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

	showFlaschard(flashcard: IFlashcard) {
		return `<div>${flashcard.front} <=> ${flashcard.back}</div>`;
	}
}
