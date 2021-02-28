const QuestyStorage = require('./questy-storage');

const App = function () {
    const data_storage = new QuestyStorage();
    data_storage.insert({type:'system', event:'stats', data: {test: 123}});
    data_storage.findOne(1);
};

App();
