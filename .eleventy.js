module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/articles')
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: '_site',
      data: './_data'
    },
    htmlTemplateEngine: 'njk'
  };
};