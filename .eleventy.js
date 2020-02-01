const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight"),
  markdownIt = require("markdown-it");
module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  eleventyConfig.setDataDeepMerge(true);
  const options = {
    html: true,
    breaks: true,
    linkify: false
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  // For extra config options
  // return {
  // }
};
