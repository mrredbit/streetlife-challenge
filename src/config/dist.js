'use strict';

import baseConfig from './base';

let config = {
    appEnv: 'dist',
    apiBaseUrl: 'https://s3-eu-west-1.amazonaws.com/' // Assume to be the Production Api server
};

export default Object.freeze(Object.assign({}, baseConfig, config));
