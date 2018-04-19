var configValues = require('./config');

module.exports = {

    /**
     * @description Creates connection to MongoDB on MLab,
     *              this method makes use of the config.json file in config
     * @see config
     * @returns The connection Url in a String
     */
    getDBConnectionString: function () {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds249839.mlab.com:49839/nodetodo`
    }
}