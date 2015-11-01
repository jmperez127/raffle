var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var utils = require("../../../app/helpers/array_helper");


lab.experiment("array utils", function () {

    lab.test("check if an array contains certain elements", function (done) {
        var arr = ["elem1","elem2","elem3"];
        Code.expect(arr.contains("elem2")).to.equal(true);
        Code.expect(arr.contains("elem20")).to.equal(false);
        done();

    });

});
