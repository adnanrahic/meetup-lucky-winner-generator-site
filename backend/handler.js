'use strict';
const meetupLuckyWinnerGenerator = require('meetup-lucky-winner-generator');

module.exports.generateOne = (event, context) => {
  const options = {
    meetup: event.queryStringParameters.meetup,
    eventId: event.queryStringParameters.eventId,
    apiKey: process.env.API_KEY
  };
  return meetupLuckyWinnerGenerator
    .generateOneLuckyWinner(options)
    .then(luckyWinner => ({
      statusCode: 200,
      body: JSON.stringify(luckyWinner)
    }))
    .catch(err => ({
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'application/json' },
      body: { message: err.message }
    }));
};

module.exports.generateThree = (event, context) => {
  const options = {
    meetup: event.queryStringParameters.meetup,
    eventId: event.queryStringParameters.eventId,
    apiKey: process.env.API_KEY
  };
  return meetupLuckyWinnerGenerator
    .generateThreeLuckyWinners(options)
    .then(luckyWinners => ({
      statusCode: 200,
      body: JSON.stringify(luckyWinners)
    }))
    .catch(err => ({
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'application/json' },
      body: { message: err.message }
    }));
};

// module.exports.generateCustom = (event, context) => {
//   const options = {
//     meetup: event.queryStringParameters.meetup,
//     eventId: event.queryStringParameters.eventId,
//     numberOfWinners: event.queryStringParameters.numberOfWinners,
//     apiKey: process.env.API_KEY
//   };
//   return meetupLuckyWinnerGenerator
//     .generateLuckyWinnersByNumber(options)
//     .then(luckyWinners => ({
//       statusCode: 200,
//       body: JSON.stringify(luckyWinners)
//     }))
//     .catch(err => ({
//       statusCode: err.statusCode || 500,
//       headers: { 'Content-Type': 'application/json' },
//       body: { message: err.message }
//     }));
// };