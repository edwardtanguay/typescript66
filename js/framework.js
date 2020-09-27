var framework;
(function (framework) {
    framework.siteLoader = function (option) {
        if (option === void 0) { option = ''; }
        if (option === '') {
            var site = new app.Site();
            return site;
        }
        else {
            var site = new framework.StartSite();
            return site;
        }
    };
    var StartSite = (function () {
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
    framework.StartSite = StartSite;
})(framework || (framework = {}));
