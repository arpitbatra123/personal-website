const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async function getReviews() {
  const response = await Cache('https://komura-api.vercel.app/api', {
    duration: '20d', // 20 days
    type: 'json'
  });

  return response;
};
