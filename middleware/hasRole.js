const compose = require('composable-middleware');
const { httpStatusCodes } = require("../utils/http-status-codes");
const { httpResponses } = require("../utils/http-responses");
const { serverResponseMessage } = require("../config/message");

const hasRole = roleRequired => {
    if (roleRequired === undefined)
        throw new Error('Required role needs to be set');
    return compose().use((req, res, next) => {
        let requiredRoles = roleRequired;
        if ((requiredRoles.indexOf(req.decodedToken?.userType) >= 0)) {
            next();
        } else {
            return res.status(httpStatusCodes.FORBIDDEN).send({
                status: false,
                code: httpStatusCodes.FORBIDDEN,
                statusCode: httpResponses.FORBIDDEN,
                message: res.__(serverResponseMessage.FORBIDDEN),
            });
        }
    });
};

module.exports = hasRole;