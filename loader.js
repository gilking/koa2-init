const fs = require('fs');

function loader(url) {
    // const url = __dirname + '/controller';
    const dir = fs.readdirSync(url);

    return dir.map((filename) => {
        const module = require(url + '/' + filename);
        return {
            name: filename.split('.')[0],
            module
        };
    })
}

function loadController() {
    const url = __dirname + '/controller';
    return loader(url);
}

function loadService() {
    const url = __dirname + '/service';
    return loader(url);
}

function loadConfig() {
    const url = __dirname + '/config';
    return loader(url);
}

module.exports = {
    loadController,
    loadService,
    loadConfig,
};
