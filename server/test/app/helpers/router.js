var Code = require('code');
var Lab = require('lab');
var Server = require('../../../server');
var lab = exports.lab = Lab.script();
Router = require("../../../app/helpers/router");


lab.experiment("helpers", function () {
    lab.before(function (done) {
        Router.map(function () {
            this.resource("raffles");
            this.resource("users");
        });
        done();
    });

    lab.test("resources can be added to the router object", function (done) {
        Code.expect(Router.resources[0]).to.equal("raffles");
        Code.expect(Router.resources[1]).to.equal("users");
        done();

    });

    lab.test("resources can only be added once", function (done) {
        Router.map(function () {
            this.resource("raffles");
            this.resource("users");
        });
        Code.expect(Router.resources[1]).to.equal("users");
        Code.expect(Router.resources[2]).to.be.undefined();
        Code.expect(Router.resources[3]).to.be.undefined();
        done();

    });

    lab.test("resources can be added to the router object", function (done) {
        Code.expect(Router.resources[0]).to.equal("raffles");
        Code.expect(Router.resources[1]).to.equal("users");
        done();
    });


    lab.test("should access a defined route and its method", function (done) {
        Code.expect(Router.routes).to.deep.equal([
            { path: "/raffles", method: "GET", handler: undefined},
            { path: "/raffles", method: "POST", handler: undefined},
            { path: "/raffles/{id}", method: "GET", handler: undefined},
            { path: "/raffles/{id}", method: "PUT", handler: undefined},
            { path: "/raffles/{id}", method: "DELETE", handler: undefined},

            { path: "/users", method: "GET", handler: undefined},
            { path: "/users", method: "POST", handler: undefined},
            { path: "/users/{id}", method: "GET", handler: undefined},
            { path: "/users/{id}", method: "PUT", handler: undefined},
            { path: "/users/{id}", method: "DELETE", handler: undefined}
        ]);

        done();
    });



    lab.test("it is possible to app a specific route", function (done) {
        //Router.map(function () {
        //    this.route("specific", {path: "/specific", method: "GET"} );
        //});
        //Code.expect(Router.findRoute("specific")).to.deep.equal([
        //
        //    { path: "/specific", method: "GET" },
        //]);

        done();
    });

});
