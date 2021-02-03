// declaring global variables
var fiveDay =
  "https://api.openweathermap.org/data/2.5/forecast?4e5dbe7db2b5e9c8b47fa40b691443d5q={city name},{country code}"
  var uvIndex =
  "https://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}"
var searchedArr = JSON.parse(localStorage.getItem("searchedItems")) || [];


// user input and passing the value to a variable

var APIKey  = "be29e9482dd2e2694c09fde1366ec85a";

function UVIndex(ln,lt){
    //lets build the url for uvindex.
    var uvqURL="https://api.openweathermap.org/data/2.5/uvi?appid="+ APIKey+"&lat="+lt+"&lon="+ln;
    $.ajax({
            url:uvqURL,
            method:"GET"
            }).then(function(response){
               
                console.log(response.value);
            });
}
    
UVIndex(123,12);
curentweatherbycity(63,54);
curentweatherbycity(3,54);


function curentweatherbycity (ln,lt){
   
  var uvqURL="https://api.openweathermap.org/data/2.5/weather?appid="+ APIKey+"&lat="+lt+"&lon="+ln;
    $.ajax({
            url:uvqURL,
            method:"GET"

            }).then(function(response){
               
                console.log(response);
                console.log(response.weather[0].main);
                console.log(response.weather[0].description);
                $('#fTemp0').text (response.weather[0].description);


            });
}


