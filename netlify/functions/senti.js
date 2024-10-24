// hello there!
//
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that.
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.

const vader = require("vader-sentiment");

exports.handler = async (event) => {
  let input;
  if (event.queryStringParameters && event.queryStringParameters.text) {
    input = event.queryStringParameters.text;
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Please provide an input text" }),
    };
  }

  const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json", // Set the Content-Type header to application/json
    },
    body: JSON.stringify(intensity), // Convert the object to a JSON string
  };
};
