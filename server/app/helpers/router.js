require("./array_helper");

module.exports = {
    resources: [],
    routes: [],
    map: function (fn) {

        var self = this;

        fn.prototype.route = function(name, path, method, handler){
            self.routes.push({path: path, method: method, handler: handler});
        };

        fn.prototype.resource = function (name) {
            if (!self.resources.contains(name)){
                self.resources.push(name);
                this.route(name, "/"+name, "GET");
                this.route(name, "/"+name, "POST");
                this.route(name, "/"+name+"/{id}", "GET");
                this.route(name, "/"+name+"/{id}", "PUT");
                this.route(name, "/"+name+"/{id}", "DELETE");
            }
        };

        var routes = new fn();

    }
};