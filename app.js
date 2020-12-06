$(() => {
    // declaring all parameters





      // console.log(new Date().toUTCString());
      // let hr = new Date().toUTCString()
        // let min = time[1]
        // let sec = time[2]
        // let timeOfDay = time[3]

      // $('.dt').html(hr);
      // for (let clock of time) {
      //   let hr = clock[0]
      //   let min = clock[1]
      //   let sec = clock[2]
      //   let timeOfDay = clock[3]`${hr} h : ${min} m : ${timeOfDay}`
      //     // $('.dt').html(clock);
      //     console.log(hr);
      // }

      // time
      let hr = new Date().toUTCString()
      $('.dt').html(hr);

  $.ajax({
      url:`http://api.openweathermap.org/data/2.5/weather?zip=76001&appid=530e784297febf79825bcc72dc838534`
  }).then(
    (data) => {
      // let time = new Date(data.sys.sunrise);
      // console.log(time);
      // city info
      $('.cityName').html(data.name);
      $('.countryCode').html(data.sys.country);
      // $('dt').html(new Date(data.dt))
      console.log(data);
      // mainTemp
      $('.temperature').html(data.main.temp + " &#176" + "F");
      $('.pressure').html(data.main.pressure + " &#13169");
      $('.feels_like').html(data.main.feels_like + " &#176" + "F");
      $('.humidity').html(data.main.humidity + "%");
      $('.max').html(data.main.temp_max + " &#176" + "F");
      $('.min').html(data.main.temp_min + " &#176" + "F");
      // cordinates
      $('.lat').html(data.coord.lat + " %");
      $('.lon').html(data.coord.lon);
      // wind
      $('.speed').html(data.wind.speed + " &#13223");
      $('.deg').html(data.wind.deg + " &#176");
      // cloudiness
      $('.cloudiness').html(data.clouds.all + " %")





      // weather
      let weather = $(data.weather);
      const $WeatherIcon = $('.icon');
      const $description = $('.description');
      const $mainWeather = $('.main');
      // console.log(data.snow);
      // looping through weather array
      for (let wArray of weather) {
        $mainWeather.html(wArray.main);
        $description.html(wArray.description.toUpperCase());
        // $WeatherIcon.html(wArray.icon);

        // console.log(wArray.main);
      }



    },
    (error) => {

    }
  )

})
