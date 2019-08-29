'use strict';

module.exports = appInfo => {
    const config = exports = {};

    config.ejs = {
        cache: false
    };

    exports.security = {
        csrf: false
    };

    return config;
};
