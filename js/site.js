var Site = (function () {
    function Site() {
        this._title = 'TypeScript/SASS Site';
        this._content = '';
        this.buildContent();
    }
    Object.defineProperty(Site.prototype, "title", {
        get: function () { return this._title; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Site.prototype, "content", {
        get: function () { return this._content; },
        enumerable: false,
        configurable: true
    });
    Site.prototype.buildContent = function () {
        var _this = this;
        this._content += "<div style=\"padding: 10px;background-color:#ccc;margin-bottom:20px\"><h3>Welcome developer:</h3><ul>\n\t\t<li>this site is a learning and experimentation zone for TypeScript and SASS</li>\n\t\t<li>search for <code>tour:</code> to take a tour of highlights</li>\n\t\t<li>to use this it as a site of your own, see the <b>README.md</b> file</li>\n\t\t</ul></div>";
        var status = Status.Online;
        var sdf = 34;
        var mainColor;
        mainColor = 'brown';
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
            this._content += qstr.capitalizeFirstLetter('Status is offline.');
        }
        else {
            this._content += qstr.capitalizeFirstLetter('Status is online.');
        }
        this.addLine();
        this._content += "<ul>";
        var dataSource = new DataSource();
        dataSource.getQuotes().forEach(function (m) {
            _this._content += "<li style=\"color: " + mainColor + "\">" + m + "</li>";
        });
        this._content += "</ul>";
        this.addLine();
        this._content += dataSource.showFlashcard({ front: 'house', back: 'Haus' });
        this._content += dataSource.showFlashcard({ front: 'mouse', back: 'Maus' });
        this.addLine();
        this._content += "The score is " + score + ".";
        this.addLine();
    };
    Site.prototype.addLine = function () {
        this._content += "<hr/>";
    };
    return Site;
}());
