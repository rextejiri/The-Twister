$(() => {
    // declaring all parameters






  $.ajax({
      url:`http://api.openweathermap.org/data/2.5/weather?zip=76001&appid=530e784297febf79825bcc72dc838534`
  }).then(
    (data) => {
      // city info
      $('.cityName').html(data.name);
      $('.countryCode').html(data.sys.country);
      // mainTemp
      $('.temperature').html(data.main.temp);
      $('.pressure').html(data.main.pressure);
      $('.feels_like').html(data.main.feels_like);
      $('.humidity').html(data.main.humidity);
      $('.max').html(data.main.temp_max);
      $('.min').html(data.main.temp_min);
      // cordinates
      $('.lat').html(data.coord.lat);
      $('.lon').html(data.coord.lon);
      // wind
      $('.speed').html(data.wind.speed);
      $('.deg').html(data.wind.deg);





      // weather
      let weather = $(data.weather);
      const $WeatherIcon = $('.icon');
      const $description = $('.description');
      const $mainWeather = $('.main');
      console.log(data);
      // looping through weather array
      for (let wArray of weather) {
        $mainWeather.html(wArray.main);
        $description.html(wArray.description.toUpperCase());
        $WeatherIcon.html(wArray.icon);

        // console.log(wArray.main);
      }



    },
    (error) => {

    }
  )

})
