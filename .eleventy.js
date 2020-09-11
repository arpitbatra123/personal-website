const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight'),
  markdownLazyLoadImages = require('markdown-it-image-lazy-loading'),
  markdownIt = require('markdown-it'),
  pluginRss = require('@11ty/eleventy-plugin-rss'),
  markdownAttrs = require('markdown-it-attrs');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('_redirects');
   eleventyConfig.addPassthroughCopy('admin');

  eleventyConfig.setDataDeepMerge(true);

  const options = {
      html: true,
      breaks: true,
      linkify: false,
      typographer: true
    },
    markdownEngine = markdownIt(options);

  markdownEngine.use(markdownLazyLoadImages);
  markdownEngine.use(markdownAttrs);

  eleventyConfig.setLibrary('md', markdownEngine);

  // Add filter for adding images in markdown
  eleventyConfig.addLiquidFilter('markdownImage', function (imageFileName, alt = '') {
    const fullPath = `../../assets/images/${imageFileName}`;
    return `[![${alt}](${fullPath}#markdown)](${fullPath})`;
  });

  eleventyConfig.addLiquidShortcode('markdownImage', function (imageFileName, alt = '') {
    const fullPath = `../../assets/images/${imageFileName}`;
    return `[![${alt}](${fullPath}#markdown)](${fullPath})`;
  });

  // For extra config options
  // return {
  // }
};
