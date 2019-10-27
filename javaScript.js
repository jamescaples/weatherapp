// {/* <script src="https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"></script> */}

var key = 'c3eabc41ca808953fd5f9ca1cad9d9f2';
var cities = [""];
var todaysDate = moment().format('ll');




function drawWeather(data) {

  console.log(data);
  console.log(todaysDate);
  console.log("2nd Console ", data.main.temp);
  console.log(data.main.humidity);
  console.log(data.main.name);
  
	var celcius = Math.round(parseFloat(data.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 

  var humidity = data.main.humidity;
  var windSpeed = data.wind.speed;
  var uvIndex = // need to get

  console.log(humidity);
  console.log(windSpeed);
  console.log(uvIndex);
  // console.log(celcius);

  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(response) {
	
	// document.getElementById('humidity').innerHTML = data.weather[0].description; 
  //   document.getElementById('temp').innerHTML = celcius + '&deg;'; 
  $('#cityAndDate').text(data.name + " - " + todaysDate);

    $('#temp').text("Temperture: "+ celcius + " Celcius, " + fahrenheit + " Fahrenheit");
    $('#humidity').text("Humidity: "+ humidity + "%");

    $('#windSpeed').text("Wind Speed: " + windSpeed + " km/hr"); 
    // document.getElementById('uvIndex').innerHTML = data.name;  
// });
}
function gettingJSON(cityName){

    console.log(cityName);
    $.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityName+ "&appid=" + key,function(json){
        console.log("first data");
       
        // var myData = JSON.parse(json);
        console.log("data:", JSON.stringify(json));
        console.log(json);
        var data = json;
        console.log(data.main.temp);
        // console.log(data);
        console.log("type of: " + typeof json);
        // console.log("type of: " + typeof data);


        
        drawWeather(data);
    });
}

 // Function for displaying city data
 function renderButtons() {

    // Deleting the city buttons prior to adding new city buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    

    // Looping through the array of cities
    for (var i = 0; i < cities.length; i++) {

      var cityButton = $("<button>");
      cityButton.addClass("citys");
      cityButton.attr("data-name", cities[i]);
      cityButton.text(cities[i]);
      $("#buttons-view").append(cityButton);
    }
  }
      $("#add-cities").on("click", function(event) {
        event.preventDefault();

        var city = $("#city-input").val().trim();
        console.log(city);

        cities.push(city);

        renderButtons();
        gettingJSON(city);
        
      });

      $("#buttons-view").on("click", 'button',function(event) {
            event.preventDefault();
            var newCitySearch = $(this).attr('data-name');
            gettingJSON(newCitySearch);

      });
      renderButtons();
      



      



