const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response)=> {
  //response.send('<h2>Hello Express!');
  response.send({
    name: 'Bassel',
    likes: [
      'Swimming',
      'Drifting'
    ]
  })
});

app.get('/about', (req, res)=>{
  res.send('About page');
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
