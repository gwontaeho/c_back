const jwt = require("jsonwebtoken");

exports.signToken = (payload, options) => jwt.sign(payload, process.env.JWT_SECRET, options);

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {}
};
