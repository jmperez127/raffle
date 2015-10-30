var Code = require('code');
var Lab = require('lab');
var Server = require('../server');
var lab = exports.lab = Lab.script();

lab.experiment("basics", function(){
    lab.before(function (done) {
        done();
    });

    lab.beforeEach(function (done) {
        done();
    });

    lab.test('returns true when 1 + 1 equals 2', function (done) {
        Code.expect(1+1).to.equal(2);
        done();
    });

    lab.test("home returns hello world", function(done) {
        var options = {
            method: "GET",
            url: "/"
        };

        Server.inject(options, function(response) {
            var result = response.result;
            Code.expect(result).to.equal('Hello, world!');
            done();
        });
    });
});
