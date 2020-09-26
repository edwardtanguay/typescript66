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
            r += "<div style=\"padding: 10px;background-color:#ccc;margin-bottom:20px\"><h3>Welcome developer:</h3><ul>\n\t\t<li>this site is a learning and experimentation zone for TypeScript and SASS</li>\n\t\t<li>search for <b>// NOTE</b> to take a tour of highlights</li>\n\t\t<li>to develop it as a site of your own, see the <b>README.md</b> file</li>\n\t\t</ul></div>";
            // enum
            var status = Status.Online;
            var sdf = 34;
            // NOTE: literal types
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
            // NOTE: how to use an enum, works in intellisense
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
    }
    qtools_qmat.prototype.getRandomNumber = function (start, end) {
        return Math.floor(Math.random() * end) + start;
    };
    return qtools_qmat;
}());
var qstr = new qtools_qstr();
var qmat = new qtools_qmat();
// NOTE: enums are easy to make
var Status;
(function (Status) {
    Status[Status["Online"] = 0] = "Online";
    Status[Status["Offline"] = 1] = "Offline";
})(Status || (Status = {}));
// === DATA ===================
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
    // NOTE: define custom parameter type
    DataReader.prototype.showFlaschard = function (flashcard) {
        return "<div>" + flashcard.front + " <=> " + flashcard.back + "</div>";
    };
    // NOTE: define return type
    DataReader.prototype.getFlashcard = function () {
        return {
            front: 'fff',
            back: 'bbb'
        };
    };
    return DataReader;
}());
