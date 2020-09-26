var app = function () {
    return capitalizeFirstLetter('Here is the new text from inside.');
};
function capitalizeFirstLetter(line) {
    return line.charAt(0).toUpperCase() + line.slice(1);
}
