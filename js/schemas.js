var app;
(function (app) {
    var Status;
    (function (Status) {
        Status[Status["Online"] = 0] = "Online";
        Status[Status["Offline"] = 1] = "Offline";
    })(Status = app.Status || (app.Status = {}));
})(app || (app = {}));
