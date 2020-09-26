namespace app {
	// TOUR: interfaces are easy to make
	export interface IFlashcard {
		front: string;
		back: string;
		category?: string;
		display?: () => string;
	}

	// TOUR: enums are easy to make
	export enum Status {
		Online,
		Offline
	}

}