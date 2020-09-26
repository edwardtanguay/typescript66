var app = function () {
    var r = '';
    // enum
    var status = Status.Online;
    // literal type
    var mainColor;
    mainColor = "green";
    var rand = qmat_getRandomNumber(1, 2);
    if (rand === 1) {
        status = Status.Offline;
    }
    else {
        status = Status.Online;
    }
    if (status === Status.Offline) {
        r += qstr_capitalizeFirstLetter('Status is offline.');
    }
    else {
        r += qstr_capitalizeFirstLetter('Status is online.');
    }
    r += '<hr/>';
    r += "<ul>";
    var dataReader = new DataReader();
    dataReader.getQuotes().forEach(function (m) {
        r += "<li style=\"color: " + mainColor + "\">" + m + "</li>";
    });
    r += "</ul>";
    r += '<hr/>';
    r += dataReader.showFlaschard({ front: 'house', back: 'Haus' });
    r += dataReader.showFlaschard({ front: 'mouse', back: 'Maus' });
    return r;
};
// =========================================================
var qstr_capitalizeFirstLetter = function (line) {
    return line.charAt(0).toUpperCase() + line.slice(1);
};
var qmat_getRandomNumber = function (start, end) {
    return Math.floor(Math.random() * end) + start;
};
// enum
var Status;
(function (Status) {
    Status[Status["Online"] = 0] = "Online";
    Status[Status["Offline"] = 1] = "Offline";
})(Status || (Status = {}));
// ES6 class
var DataReader = /** @class */ (function () {
    function DataReader() {
    }
    DataReader.prototype.getQuotes = function () {
        return [
            'this one',
            'that one',
            'another one',
            'fourth one',
            'fifth one'
        ];
    };
    DataReader.prototype.showFlaschard = function (flashcard) {
        return "<div>" + flashcard.front + " <=> " + flashcard.back + "</div>";
    };
    return DataReader;
}());
