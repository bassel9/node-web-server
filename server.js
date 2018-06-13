const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response)=> {
  response.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome to my website',
  })
});

app.get('/about', (req, res)=>{
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res)=> {
  res.send({
    errorMessage: 'Unable to handle this request'
  });
});

//bind the app to a port on our machine
//second argument of listen is optional
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
