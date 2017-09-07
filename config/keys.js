// keys.js -- figure out what set of crendentials  to return
if (process.env.NODE_ENV === 'production')  {
    //we are in production - return the production set of keys
    module.else = require('./prod');
} else {
    //we are in development - return the dev keys!!!
    module.exports = require('./dev');
}