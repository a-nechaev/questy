const iris = require('./iris');

module.exports = function() {
    "use strict";

    this.insert = function(data) {
        let type = '';
        let event = '';
        let content = '';
        if (data && data.type) type = data.type;
        if (data && data.event) event = data.event;
        if (data && data.data) content = data.data;

        if (type && event && content) {
            iris.insert(type, event, data);
        }
    };
    this.findOne = function (id) {
        iris.findOne(id);
    }
};
