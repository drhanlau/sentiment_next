// hello there!
//
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that.
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.

const vader = require("vader-sentiment");
const input = "VADER is very smart, handsome, and funny";

exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);

  return {
    statusCode: 200,
    // body: `Hello ${subject}!`,
    body: JSON.stringify(intensity),
  };
};
