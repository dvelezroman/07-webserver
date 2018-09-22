const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;

// serve static pages in the selected folder
app.use(express.static(__dirname + '/public'));
// express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.post('/', function (req, res) {
  res.send(req.body);
})

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/about', function (req, res) {
  res.render('about');
})
 
app.listen(port, () => console.log(`Escuchando en puerto ${ port }`));