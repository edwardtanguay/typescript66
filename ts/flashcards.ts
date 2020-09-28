// TOUR: interfaces
interface IFlashcard {
	front: string;
	back: string;
	displayAsFlashcard(): void;
}

class Flashcard implements IFlashcard {

	constructor(public front: string, public back: string) {
	}

	displayAsFlashcard() {
		return this.front + ' / ' + this.back;
	}
}

class Book implements IFlashcard {

	constructor(public title: string, public description: string, public author: string) {
	}

	get front() {
		return this.title;
	}

	get back() {
		return this.author;
	}

	displayAsFlashcard() {
		return 'BOOK: ' + this.front + ' / AUTHOR: ' + this.back;
	}
}