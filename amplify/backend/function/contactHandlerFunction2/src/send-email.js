/* eslint-disable no-undef */
const { SendEmailCommand } = require("@aws-sdk/client-sesv2");

module.exports.sendEmail = async function ({
  from,
  to,
  subject,
  body,
  client,
}) {
  const input = {
    FromEmailAddress: from,
    Destination: {
      ToAddresses: [to],
    },
    Content: {
      Simple: {
        Subject: {
          Data: subject,
        },
        Body: {
          Text: {
            Data: body,
          },
        },
      },
    },
  };
  const command = new SendEmailCommand(input);
  return client.send(command);
};