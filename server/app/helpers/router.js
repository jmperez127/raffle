// TODO make a library out of this
var _ = require('lodash');

var Router = function () {
    var resources = [];
    var routes = [];
    var map = function (fn) {

        var self = this;

        fn.prototype.route = function (name, opts) {
            opts.method = opts.method || null;
            opts.action = opts.action || null;
            opts.path = opts.path || null;
            self.routes.push({
                name: name,
                path: opts.path,
                method: opts.method,
                action: opts.action
            });
        };

        fn.prototype.resource = function (name) {
            if (!_.includes(self.resources, name)) {
                self.resources.push(name);
                var controllerName = _.capitalize(name) + "Controller";

                this.route(name + "_index", {
                    path: "/" + name,
                    method: "GET",
                    action: controllerName + "#index"
                });
                this.route(name + "_create", {
                    path: "/" + name,
                    method: "POST",
                    action: controllerName + "#create"
                });
                this.route(name + "_show", {
                    path: "/" + name + "/{id}",
                    method: "GET",
                    action: controllerName + "#show"
                });
                this.route(name + "_update", {
                    path: "/" + name + "/{id}",
                    method: "PUT",
                    action: controllerName + "#update"
                });
                this.route(name + "_delete", {
                    path: "/" + name + "/{id}",
                    method: "DELETE",
                    action: controllerName + "#delete"
                });
            }
        };
        var defineMappedRoutes = new fn();
    };

    var findRouteByName = function (routeName) {
        return _.find(this.routes, function (route) {
            return route.name == routeName;
        });
    };

    return {
        map: map,
        resources: resources,
        routes: routes,
        findRoute: findRouteByName
    }
}();
module.exports = Router;