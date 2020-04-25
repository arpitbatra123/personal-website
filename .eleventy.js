const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight'),
  markdownLazyLoadImages = require('markdown-it-image-lazy-loading'),
  markdownIt = require('markdown-it');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('favicon.ico');

  eleventyConfig.setDataDeepMerge(true);
  const options = {
    html: true,
    breaks: true,
    linkify: false
  },
  markdownEngine = markdownIt(options);
  markdownEngine.use(markdownLazyLoadImages);

  eleventyConfig.setLibrary('md', markdownEngine);

  // For extra config options
  // return {
  // }
};
