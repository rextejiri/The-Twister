$(() => {
  let lastInfoDisplay = $('.wrapper').children().length - 1;
  let currentInfoDisplay = 0;

  $('.next').on('click', () => {

    $('.wrapper').children().eq(currentInfoDisplay).css('display', 'none');
    // currentInfoDisplay++
    if (currentInfoDisplay < lastInfoDisplay) {
      currentInfoDisplay++;
    }else {
      currentInfoDisplay = 0;
    }
    $('.wrapper').children().eq(currentInfoDisplay).css('display', 'flex');
    // console.log($('.wrapper').children());
  });

  // next onclick ends here

  $('.previous').on('click', () => {

    $('.wrapper').children().eq(currentInfoDisplay).css('display', 'none');
    // currentInfoDisplay++
    if (currentInfoDisplay > 0) {
      currentInfoDisplay--;
    }else {
      currentInfoDisplay = lastInfoDisplay;
    }
    $('.wrapper').children().eq(currentInfoDisplay).css('display', 'flex');
    // console.log($('.wrapper').children());
  });
    // declaring all parameters

      // event listener
  $("button").on('click', (event) => {

    const userInput = $('input[type="text"]').val();



    // time

    let hr = new Date().toUTCString()
    $('.dt').html(hr);

    $.ajax({
        url:`http://api.openweathermap.org/data/2.5/weather?zip=${userInput}&appid=530e784297febf79825bcc72dc838534`
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
        $('.humidity').html(data.main.humidity + " %");
        $('.max').html(data.main.temp_max + " &#176" + "F");
        $('.min').html(data.main.temp_min + " &#176" + "F");
        // cordinates
        $('.lat').html(data.coord.lat + " %");
        $('.lon').html(data.coord.lon);
        // wind
        $('.speed').html(data.wind.speed + " mph");
        $('.deg').html(data.wind.deg + " &#176");
        // cloudiness
        $('.cloudiness').html(data.clouds.all + " %");

        // weather
        let weather = $(data.weather);

        const $description = $('.description');
        const $mainWeather = $('.main');
        // console.log(data.snow);
        // looping through weather array
        for (let wArray of weather) {
          $mainWeather.html(wArray.main);
          $description.html(wArray.main + " with " + wArray.description);
          let $WeatherIcon = wArray.icon
          console.log($WeatherIcon);
          console.log(wArray);
          let iconUrl = `http://openweathermap.org/img/wn/${$WeatherIcon}.png`
          $('.weather-icon').attr('src', iconUrl)

          // $WeatherIcon.html(wArray.icon);

          // console.log(wArray.main);
        }



      },
      (error) => {

      }
    );
      // $ajax ends here
  });
      // eventlister ends here


});
