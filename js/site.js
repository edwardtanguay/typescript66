var app;
(function (app) {
    var Site = (function () {
        function Site() {
            this._title = 'TypeScript/SASS Site';
            this._content = '';
            this._loadData();
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
            var status = app.Status.Online;
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
                status = app.Status.Offline;
            }
            else {
                status = app.Status.Online;
            }
            var customer = {
                id: 34,
                firstName: 'Fritz',
                lastName: 'Haber',
                description: 'chemist'
            };
            customer.lastName = 'unknown';
            if (status === app.Status.Offline) {
                this._content += qstr.capitalizeFirstLetter('Status is offline.');
            }
            else {
                this._content += qstr.capitalizeFirstLetter('Status is online.');
            }
            this._addLine();
            this._content += "<ul>";
            var dataSource = new app.DataSource();
            this._quotes.forEach(function (m) {
                _this._content += "<li style=\"color: " + mainColor + "\">" + m + "</li>";
            });
            this._content += "</ul>";
            this._addLine();
            this._content += dataSource.showFlashcard({ front: 'house', back: 'Haus' });
            this._content += dataSource.showFlashcard({ front: 'mouse', back: 'Maus' });
            this._addLine();
            this._content += "The score is " + score + ".";
            this._addLine();
            this._content += "Number of quotes = " + this._quotes.length;
            this._addLine();
            this._content += "The version of the dataSource is <code>" + app.DataSource.getVersion() + "</code>, retrieved from a static method.";
            this._addLine();
            var obj1 = {
                firstName: 'Jawaharlal',
                lastName: 'Nehru'
            };
            var obj2 = qobj.clone(obj1);
            obj2.firstName = '(unknown)';
            this._content += "<div>obj1.firstName = \"" + obj1.firstName + "\"</div>";
            this._content += "<div>obj2.firstName = \"" + obj2.firstName + "\"</div>";
            var name = 'Andy';
            var name2 = qobj.clone(name);
            this._content += "<div>obj1.firstName = \"" + name + "\"</div>";
            this._content += "<div>obj2.firstName = \"" + name2 + "\"</div>";
            this._addLine();
        };
        Site.prototype._addLine = function () {
            this._content += "<hr/>";
        };
        Site.prototype._loadData = function () {
            var dataSource = new app.DataSource();
            this._quotes = dataSource.getQuotes();
        };
        return Site;
    }());
    app.Site = Site;
})(app || (app = {}));
