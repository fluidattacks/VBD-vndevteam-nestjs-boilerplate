const basicAuth = require('express-basic-auth');
module.exports.handle = basicAuth({ users: { [process.env.OPS_USER]: process.env.OPS_PASS }, challenge: true });
