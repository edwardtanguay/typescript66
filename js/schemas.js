// TOUR: enums are easy to make
var Status;
(function (Status) {
    Status[Status["Online"] = 0] = "Online";
    Status[Status["Offline"] = 1] = "Offline";
})(Status || (Status = {}));
