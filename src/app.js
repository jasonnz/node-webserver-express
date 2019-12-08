const path =require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for express config
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to server
app.use(express.static(path.join(__dirname, '../public')));

// App get for route handling
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Jason Marshall'

  });
});

app.get('/about', (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Jason Marshall"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "This is a help message",
    title: 'Help Title',
    name: 'Jason Marshall'
  });
});

app.get("/weather", (req, res) => {
  res.send({
      location: "Wellington",
      forecast: "Pleasant evening 15 degress",
      name: 'Jason Marshall'    
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', { 
    message: "404 - Your HELP article not found!",
    name: 'Jason Marshall' 
  });
});

app.get('*', (req, res) => {
  res.render('404', { 
    message: "404 - Your page cannot be found!",
    name: 'Jason Marshall' 
  });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});