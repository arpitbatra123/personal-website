const got = require('got');
module.exports = async function getReviews() {
  const response = await got(`https://betterreads-seven.now.sh/api`);
  return JSON.parse(response.body);
};
