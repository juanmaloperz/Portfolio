var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=19f3d31d9afc379592cabe4b3a8258fd&units=metric'


//19f3d31d9afc379592cabe4b3a8258fd

module.exports= {
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);  // Enocded without %
     var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

     return axios.get(requestUrl).then(function(res){
         if(res.data.cod && res.data.message){
            throw new Error (res.data.message);
         }  else {
           return res.data.main.temp;
         }
     }, function(res){
      throw new Error (res.data.message);
   });
 }
}
