var app;
(function (app) {
    var DataSource = (function () {
        function DataSource() {
        }
        DataSource.prototype.getQuotes = function () {
            return [
                'this one',
                'that one',
                'another one',
                'fourth one',
                'fifth one',
                'sixth',
                'seven'
            ];
        };
        DataSource.prototype.showFlashcard = function (flashcard) {
            return "<div>" + flashcard.front + " <=> " + flashcard.back + "</div>";
        };
        DataSource.prototype.getFlashcard = function () {
            return {
                front: 'fff',
                back: 'bbb'
            };
        };
        DataSource.getVersion = function () {
            return '0.0.1';
        };
        return DataSource;
    }());
    app.DataSource = DataSource;
})(app || (app = {}));
