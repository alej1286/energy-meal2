/* eslint-disable no-undef */

const { sendEmail } = require('./send-email');
const { sesClient } = require('./ses-client');


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {


    const {name, email,message} = JSON.parse(event.body)
    await sendEmail({
        from:"admin@energymeal.us",
        to:"alej1286@gmail.com",
        client: sesClient,
        subject:`Message from "${name}"`,
        body: `Email: ${email}\nmessage: ${message}`
    })
    return {
        statusCode: 200,
      headers: {      
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      },
        body: JSON.stringify(event),
    };
};
