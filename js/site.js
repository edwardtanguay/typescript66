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
            this._addToContent("<div style=\"padding: 10px;background-color:#ccc;margin-bottom:20px\"><h3>Welcome developer:</h3><ul>\n\t\t<li>this site is a learning and experimentation zone for TypeScript and SASS</li>\n\t\t<li>search for <code>tour:</code> to take a tour of highlights</li>\n\t\t<li>to use this it as a site of your own, see the <b>README.md</b> file</li>\n\t\t</ul></div>");
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
                this._addToContent(qstr.capitalizeFirstLetter('Status is offline.'));
            }
            else {
                this._addToContent(qstr.capitalizeFirstLetter('Status is online.'));
            }
            this._addSeparator();
            this._addToContent("<ul>", true);
            var dataSource = new app.DataSource();
            this._quotes.forEach(function (m) {
                _this._addToContent("<li style=\"color: " + mainColor + "\">" + m + "</li>", true);
            });
            this._addToContent("</ul>");
            this._addSeparator();
            this._addToContent(dataSource.showFlashcard({ front: 'house', back: 'Haus' }));
            this._addToContent(dataSource.showFlashcard({ front: 'mouse', back: 'Maus' }));
            this._addSeparator();
            this._addToContent("The score is " + score + ".");
            this._addSeparator();
            this._addToContent("Number of quotes = " + this._quotes.length);
            this._addSeparator();
            this._addToContent("The version of the dataSource is <code>" + app.DataSource.getVersion() + "</code>, retrieved from a static method.");
            this._addSeparator();
            var obj1 = {
                firstName: 'Jawaharlal',
                lastName: 'Nehru'
            };
            var obj2 = qobj.clone(obj1);
            obj2.firstName = '(unknown)';
            this._addToContent("obj1.firstName = \"" + obj1.firstName + "\"");
            this._addToContent("obj2.firstName = \"" + obj2.firstName + "\"");
            var name = 'Andy';
            var name2 = qobj.clone(name);
            this._addToContent("obj1.firstName = \"" + name + "\"");
            this._addToContent("obj2.firstName = \"" + name2 + "\"");
            this._addSeparator();
            var numbers = [1, 2, 3, 4];
            var numbers2 = [5, 6, 7, 8];
            this._addToContent(numbers.join('|'));
            this._addToContent(numbers2.reverse().join('-'));
            this._addSeparator();
            var person = new framework.Person('Pierre', 'Bayle');
            person._firstName = '(unknown)';
            this._addToContent(person.display());
            this._addSeparator();
            var pair1 = new framework.KeyValuePair(1, 'First');
            var pair2 = new framework.KeyValuePair('Second', new Date(Date.now()));
            var pair3 = new framework.KeyValuePair(3, 'Third');
            var pairs = new framework.KeyValuePairPrinter([pair1, pair3]);
            this._addToContent(pairs.display());
            this._addSeparator();
            var measure1 = { name: "Measure 1", length: 453 };
            var measure2 = { name: "Measure 2", length: 47 };
            this._addToContent(framework.totalLength(measure1, measure2).toString());
            this._addSeparator();
        };
        Site.prototype._addSeparator = function () {
            this._content += "<hr/>";
        };
        Site.prototype._addToContent = function (line, suppressDiv) {
            if (suppressDiv === void 0) { suppressDiv = false; }
            if (suppressDiv) {
                this._content += "" + line;
            }
            else {
                this._content += "<div>" + line + "</div>";
            }
        };
        Site.prototype._loadData = function () {
            var dataSource = new app.DataSource();
            this._quotes = dataSource.getQuotes();
        };
        return Site;
    }());
    app.Site = Site;
})(app || (app = {}));
