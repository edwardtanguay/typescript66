class DataSource {
	getQuotes(): string[] {
		return [
			'this one',
			'that one',
			'another one',
			'fourth one',
			'fifth one',
			'sixth',
			'seven'
		];
	}

	// TOUR: define custom parameter type
	showFlashcard(flashcard: IFlashcard):string {
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