var qtools_qstr = (function () {
    function qtools_qstr() {
    }
    qtools_qstr.prototype.capitalizeFirstLetter = function (line) {
        return line.charAt(0).toUpperCase() + line.slice(1);
    };
    return qtools_qstr;
}());
var qtools_qmat = (function () {
    function qtools_qmat() {
    }
    qtools_qmat.prototype.getRandomNumber = function (start, end) {
        return Math.floor(Math.random() * end) + start;
    };
    return qtools_qmat;
}());
var qstr = new qtools_qstr();
var qmat = new qtools_qmat();
