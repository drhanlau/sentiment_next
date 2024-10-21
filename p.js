const vader = require("vader-sentiment");
const input = "VADER is very smart, handsome, and funny";
const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
console.log(intensity);
// {neg: 0.0, neu: 0.299, pos: 0.701, compound: 0.8545}
