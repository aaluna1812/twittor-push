const vapid = require("./vapid.json");
const urlSageBase64 = require("urlsafe-base64");

module.exports.getKey = () => {
    return urlSageBase64.decode( vapid.publicKey );
};