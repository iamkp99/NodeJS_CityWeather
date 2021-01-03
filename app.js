let request = require('request');

let apiKey = '69318af2c3b2437d082897c840e5986a';
let city = 'Nagpur';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
   // console.log('body:', body);
    let weather= JSON.parse(body);
    console.log('HEy  ',weather.name);
  }
});

