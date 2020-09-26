function capitalizeFirstLetter(line) {
    return line.charAt(0).toUpperCase() + line.slice(1);
}
(function () {
    var app = document.getElementById('app');
    app.innerHTML = capitalizeFirstLetter('new text from main.js');
}());
