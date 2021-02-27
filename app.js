const path = require('path');
const QuestyStorage = require(path.join(__dirname, './questy-storage'));

const App = function () {
    const data_storage = new QuestyStorage();
    data_storage.insert({type:'system', event:'stats', data:stats});
};

(new App()).init();