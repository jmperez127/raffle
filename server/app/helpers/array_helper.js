module.exports = function () {
    Array.prototype.contains = function (str) {
        return this.indexOf(str) > -1;
    };
}();