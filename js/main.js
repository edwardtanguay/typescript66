var app = function () {
    var r = '';
    var status = Status.Online;
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
        r += "<li>" + m + "</li>";
    });
    r += "</ul>";
    return r;
};
// =========================================================
var qstr_capitalizeFirstLetter = function (line) {
    return line.charAt(0).toUpperCase() + line.slice(1);
};
var qmat_getRandomNumber = function (start, end) {
    return Math.floor(Math.random() * end) + start;
};
var Status;
(function (Status) {
    Status[Status["Online"] = 0] = "Online";
    Status[Status["Offline"] = 1] = "Offline";
})(Status || (Status = {}));
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
    return DataReader;
}());
