var town;
var temp;
var wind;
var city;
var dir;
var humidity;
var unit;


window.onload = function(){
  getCity();
}
function getCity() {

   town =  document.getElementById('cityName').value;
sendRequest(town,unit);
sendForecast(town,unit);
}
function celsius(){
unit= "metric";
sendRequest(town,unit);
sendForecast(town,unit);
}
function ferenheit(){
unit= "imperial";
sendRequest(town,unit);
sendForecast(town,unit);
}
function sendRequest(town,unit){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var weather = {};
weather.icon = myObj.weather[0].icon;
        weather.temp= myObj.main.temp;
        weather.wind= myObj.wind.speed;
        weather.city=myObj.name;
        weather.dir=myObj.wind.deg;
        weather.humidity=myObj.main.humidity;


        document.getElementById("city").innerHTML = weather.city;
        document.getElementById("weather").innerHTML = weather.temp + " &deg";
        document.getElementById("wind").innerHTML = weather.wind + " m/s";
        document.getElementById("dir").innerHTML = weather.dir + " °";
        document.getElementById("hum").innerHTML = weather.humidity +"%";
var text =''
text = "<img src='http://openweathermap.org/img/w/" + weather.icon + ".png' style='width:10%;'>";
document.getElementById("i").innerHTML=text;




    }
}


xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + town + "&units="+unit+"&APPID=8a4d18757d801c834089f826eef03e6e", true);
xmlhttp.send();
   }

function sendForecast(town,unit){

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var forecast = JSON.parse(this.responseText);
var text='';

text += "<table><tr><th></th><th>Time</th><th>Temperature</th><th>Humidity</th><th>Wind Speeds</th></tr>";
forecast.list.forEach(function(forecastEntry, index, list)
{

text += "<tr><td><img src='http://openweathermap.org/img/w/" + forecastEntry.weather[0].icon + ".png'></td><td>" + forecastEntry.dt_txt + "</td><td> "+ forecastEntry.main.temp + "&deg;</td><td>" + forecastEntry.main.humidity + "%</td><td>" + forecastEntry.wind.speed + "m/s</td></tr>";
})

text += "</table>";
document.getElementById("fweather").innerHTML = text;
   }
};
xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q="+ town + "&units="+unit+"&APPID=8a4d18757d801c834089f826eef03e6e", true);
xhttp.send();


   }




 function myFunction(fnameid, str) {

      if (str && str.length >= 1)
      {
          var firstChar = str.charAt(0);
          var remainingStr = str.slice(1);
          str = firstChar.toUpperCase() + remainingStr;
      }
      document.getElementById(fnameid).value = str;
  }
