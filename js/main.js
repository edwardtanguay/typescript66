var Site = /** @class */ (function () {
    function Site() {
    }
    Object.defineProperty(Site.prototype, "title", {
        get: function () {
            return 'TypeScript/SASS Site';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Site.prototype, "content", {
        get: function () {
            var r = '';
            // === ENUMS ===================
            var Status;
            (function (Status) {
                Status[Status["Online"] = 0] = "Online";
                Status[Status["Offline"] = 1] = "Offline";
            })(Status || (Status = {}));
            // enum
            var status = Status.Online;
            var sdf = 34;
            // literal type
            var mainColor;
            mainColor = 'green';
            var score;
            score = 55;
            score = 'five';
            if (typeof score === 'string') {
                score = "\"" + score + "\"";
            }
            var rand = qmat.getRandomNumber(1, 2);
            if (rand === 1) {
                status = Status.Offline;
            }
            else {
                status = Status.Online;
            }
            if (status === Status.Offline) {
                r += qstr.capitalizeFirstLetter('Status is offline.');
            }
            else {
                r += qstr.capitalizeFirstLetter('Status is online.');
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
            r += '<hr/>';
            r += "The score is " + score + ".";
            return r;
        },
        enumerable: false,
        configurable: true
    });
    return Site;
}());
// === SITE LOADER AREA =================================
var siteLoader = function (option) {
    if (option === void 0) { option = ''; }
    if (option === '') {
        var site = new Site();
        return site;
    }
    else {
        var site = new StartSite();
        return site;
    }
};
var StartSite = /** @class */ (function () {
    function StartSite() {
    }
    Object.defineProperty(StartSite.prototype, "title", {
        get: function () {
            return 'Welcome';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StartSite.prototype, "content", {
        get: function () {
            return 'Welcome to this site.';
        },
        enumerable: false,
        configurable: true
    });
    return StartSite;
}());
// === QTOOLS ===================
var qtools_qstr = /** @class */ (function () {
    function qtools_qstr() {
    }
    qtools_qstr.prototype.capitalizeFirstLetter = function (line) {
        return line.charAt(0).toUpperCase() + line.slice(1);
    };
    return qtools_qstr;
}());
var qtools_qmat = /** @class */ (function () {
    function qtools_qmat() {
        this.getRandomNumber = function (start, end) {
            return Math.floor(Math.random() * end) + start;
        };
    }
    return qtools_qmat;
}());
var qstr = new qtools_qstr();
var qmat = new qtools_qmat();
// === DATA SOURCE ===================
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
