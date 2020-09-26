var Site = (function () {
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
            r += "<div style=\"padding: 10px;background-color:#ccc;margin-bottom:20px\"><h3>Welcome developer:</h3><ul>\n\t\t<li>this site is a learning and experimentation zone for TypeScript and SASS</li>\n\t\t<li>search for <code>// TOUR</code> to take a tour of highlights</li>\n\t\t<li>to develop it as a site of your own, see the <b>README.md</b> file</li>\n\t\t</ul></div>";
            var status = Status.Online;
            var sdf = 34;
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
            r += dataReader.showFlashcard({ front: 'house', back: 'Haus' });
            r += dataReader.showFlashcard({ front: 'mouse', back: 'Maus' });
            r += '<hr/>';
            r += "The score is " + score + ".";
            return r;
        },
        enumerable: false,
        configurable: true
    });
    return Site;
}());
var DataReader = (function () {
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
    DataReader.prototype.showFlashcard = function (flashcard) {
        return "<div>" + flashcard.front + " <=> " + flashcard.back + "</div>";
    };
    DataReader.prototype.getFlashcard = function () {
        return {
            front: 'fff',
            back: 'bbb'
        };
    };
    return DataReader;
}());
