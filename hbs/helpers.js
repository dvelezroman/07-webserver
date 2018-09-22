const hbs = require('hbs');

hbs.registerHelper('capitalize', (text) => {
  let string = text.split(' ');
  string.forEach((word, pos) => {
    string[pos] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  string.join(' ');
  return string;
});

hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
})