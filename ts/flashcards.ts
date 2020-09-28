interface IFlashcard {
	front: string;
	back: string;
	displayAsFlashcard(): void;
}

class Flashcard implements IFlashcard {
	public front: string = '';
	public back: string = '';

	constructor(front: string, back: string) {
		this.front = front;
		this.back = back;
	}

	displayAsFlashcard() {
		return this.front + ' / ' + this.back;
	}
}

class Book implements IFlashcard {
	public title: string = '';
	public description: string = '';
	public author: string = '';

	constructor(title: string, description: string, author: string) {
		this.title = title;
		this.description = description;
		this.author = author;
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