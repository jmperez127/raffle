var Code = require('code');
var Lab = require('lab');
var Server = require('../../server');
var fs = require('fs');
var lab = exports.lab = Lab.script();

lab.experiment("routes", function () {
    lab.before(function (done) {
        done();
    });

    lab.beforeEach(function (done) {
        done();
    });

    lab.test("home response code is 200", function (done) {
        var options = {
            method: "GET",
            url: "/"
        };

        Server.inject(options, function (response) {
            Code.expect(response.statusCode).to.equal(200);
            done();
        });
    });

    lab.test("api raffle endpoints responds with code 200", function (done) {

        var options = [
            {method: "GET", url: "/api/raffles"},
            {method: "GET", url: "/api/raffles/{id}"},
            {method: "POST", url: "/api/raffles"},
            {method: "PUT", url: "/api/raffles/{id}"},
            {method: "DELETE", url: "/api/raffles/{id}"}
        ];

        for (var i = 0; i < options.length; i++)
            Server.inject(options[i], function (response) {
                Code.expect(response.statusCode).to.equal(200);
            });
        done();

    });

    lab.test("server can serve static asset files", function (done) {
        console.log("test");
        var dir = "public/assets/", files = fs.readdirSync(dir);
        for (var i = 0; i < files.length; i++)
            if (!fs.lstatSync(dir + files[i]).isDirectory()) {
                var options = {
                    method: "GET",
                    url: "/assets/" + files[i]
                };

                Server.inject(options, function (response) {

                    Code.expect(response.statusCode).to.equal(200);
                });
            }
        done();

    });


});
