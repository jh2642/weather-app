function initApp() {
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=46077&units=imperial&APPID=f947f8413077a82c024820c88ca14f0a')
  .then(function(response){
      return response.json()
    })
  .then(function(weather){
    console.log(weather)
    document.getElementById('city').innerHTML = weather.name;
    document.getElementById('date').innerHTML = moment().format('LLLL');
    document.getElementById('temperature').innerHTML = weather.main.temp;
    document.getElementById('conditions').innerHTML = weather.weather[0].description;
    var cod = weather.weather[0].id
    var className = "owf owf-" + cod
    document.getElementById('icons').classList = className;
  })

}

// f947f8413077a82c024820c88ca14f0a api key
