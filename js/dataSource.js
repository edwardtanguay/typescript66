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
    return DataSource;
}());
