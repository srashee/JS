var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('index');
});

app.post('/', function(req, res) {
  res.render('success');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
