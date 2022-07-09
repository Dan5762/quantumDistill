module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/articles')
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'public',
      data: './_data'
    },
    htmlTemplateEngine: 'njk'
  };
};