const app = () => {
	return capitalizeFirstLetter('Here is the new text from inside.');
} 

function capitalizeFirstLetter(line: string) {
	return line.charAt(0).toUpperCase() + line.slice(1);
}
