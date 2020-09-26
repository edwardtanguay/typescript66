// TOUR: interfaces are easy to make
interface IFlashcard {
	front: string;
	back: string;
	category?: string;
	display?: () => string;
}

// TOUR: enums are easy to make
enum Status {
	Online,
	Offline
}