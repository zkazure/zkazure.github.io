/*
 * Post Title
 */

hexo.extend.helper.register('capitalize', function(text) {
  return text.replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });
});

