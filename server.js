const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs');

app.get('/',(req, res) => {
	res.render('pages/index');
});

// about page
app.get('/about',(req, res) => {
	res.render('pages/about');
});

app.listen(3000, () => {
  console.log('listening on: ', PORT);
});
