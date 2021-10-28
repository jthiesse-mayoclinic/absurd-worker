module.exports = {
    webpack: function(config, env) {

        return config;
    },
    devServer: function(configFn) {
        return function(proxy, allowedHost){
            const config = configFn(proxy, allowedHost);

            config.headers= {
                'Cross-Origin-Opener-Policy': 'same-origin',
                'Cross-Origin-Embedder-Policy': 'require-corp'
            };           

            return config;
        }
    }
};