var Code = require('code');
var Lab = require('lab');
var Server = require('../../../server');
var lab = exports.lab = Lab.script();
var Router = require("../../../app/helpers/router");

lab.experiment("Router", function () {
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
            {name: "raffles_index", path: "/raffles", method: "GET", action: "RafflesController#index"},
            {name: "raffles_create", path: "/raffles", method: "POST", action: "RafflesController#create"},
            {name: "raffles_show", path: "/raffles/{id}", method: "GET", action: "RafflesController#show"},
            {name: "raffles_update", path: "/raffles/{id}", method: "PUT", action: "RafflesController#update"},
            {name: "raffles_delete", path: "/raffles/{id}", method: "DELETE", action: "RafflesController#delete"},

            {name: "users_index", path: "/users", method: "GET", action: "UsersController#index"},
            {name: "users_create", path: "/users", method: "POST", action: "UsersController#create"},
            {name: "users_show", path: "/users/{id}", method: "GET", action: "UsersController#show"},
            {name: "users_update", path: "/users/{id}", method: "PUT", action: "UsersController#update"},
            {name: "users_delete", path: "/users/{id}", method: "DELETE", action: "UsersController#delete"}
        ]);

        done();
    });


    lab.test("it is possible to map a specific route", function (done) {
        Router.map(function () {
            this.route("specific", {path: "/specific", method: "GET"});
        });

        Code.expect(Router.findRoute("specific")).to.deep.equal(
            {name: "specific", path: "/specific", method: "GET", action: null}
        );
        done();
    });

});
