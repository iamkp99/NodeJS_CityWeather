const express = require('express');
const bodyParser = require('body-parser');
const app = express()

let request = require('request');
let apiKey = '**'; //removed api key
let city = 'Nagpur';


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
  res.render('index' , {weather: null, error: null});
})

app.get('/about', (req,res)=>{

    res.render('about', {message: 'My name is Krunal P.' , err:null});
})


app.post('/', function (req, res) {
    city=req.body.city
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    console.log(req.body.city);
  

  
    request(url, function (err, response, body) {
        if(err){
        console.log('error:', error);
        res.render('index', {weather:null ,error:'Error occured'});  
        }
         else {
        // console.log('body:', body);
        let weather = JSON.parse(body)
        if(weather.main == undefined){
            res.render('index', {weather: null, error: 'Error, please try again'});
          } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        //console.log(weatherText);
        res.render('index', {weather:weatherText , error:null})
          }

    }
  });

  
})

app.get('/about/*' , (req,res)=>{
    res.render('404view' , {err:'About page not found'})
})

app.get('*' , (req,res)=>{
    res.send('404 not found ')
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})




