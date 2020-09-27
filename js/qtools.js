var qstr;
(function (qstr) {
    function capitalizeFirstLetter(line) {
        return line.charAt(0).toUpperCase() + line.slice(1);
    }
    qstr.capitalizeFirstLetter = capitalizeFirstLetter;
})(qstr || (qstr = {}));
var qmat;
(function (qmat) {
    function getRandomNumber(start, end) {
        return Math.floor(Math.random() * end) + start;
    }
    qmat.getRandomNumber = getRandomNumber;
})(qmat || (qmat = {}));
var qobj;
(function (qobj) {
    function clone(obj) {
        var serialized = JSON.stringify(obj);
        return JSON.parse(serialized);
    }
    qobj.clone = clone;
})(qobj || (qobj = {}));
