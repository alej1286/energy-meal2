/* eslint-disable no-undef */
const { SESv2Client } = require("@aws-sdk/client-sesv2");
const client = new SESv2Client({
  region: "us-east-1",
});

module.exports.sesClient = client;