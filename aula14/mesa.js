let soma = require('./modulos/sum');
let multiplica = require('./modulos/mult');

console.log(soma(2,5));
console.log(multiplica(2,5));

var weather = require('weather-js');

weather.find({search: 'Paulinia, SP, Brazil', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
   
    console.log(JSON.stringify(result, null, 2));
  });

