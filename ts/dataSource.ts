class DataSource {
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
	showFlashcard(flashcard: IFlashcard) {
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