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

    $('.wrapper').children().eq(1).css('display', 'flex');
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
    $(".header").css("transform", "none").css("animation-name","transitionUp")
    .css("animation-duration", ".5s");


    const userInput = $('input[type="text"]').val();


    $(".container").css("display","flex").css("animation-name","opacity").css("animation-duration", ".8s")
    .css("animation-timing-function","linear")


    // time

    let hr = new Date(parseInt());
        let currentTime = hr.toLocaleString();
    // let currentTimeZone = hr.getTimezoneOffset() / 60;
    $('.dt').html(currentTime);

    $.ajax({
        url:`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=530e784297febf79825bcc72dc838534`
    }).then(
      (data) => {
        // let time = new Date(data.sys.sunrise);
        // console.log(time);
        // city info
        console.log(data);
        $('.cityName').html(data.name);
        $('.countryCode').html(data.sys.country);
        // $('dt').html(new Date(data.dt))
        // console.log(data);
        // mainTemp
        $('.temperature').html("Temperature " + "| " + data.main.temp + " &#176" + "F");
        $('.pressure').html("Pressure " + "| " + data.main.pressure + " &#13169");
        $('.feels_like').html("Feels Like " + "| " + data.main.feels_like + " &#176" + "F");
        $('.humidity').html("Humidity " + "| " + data.main.humidity + " %");
        $('.max').html("Max Temperature " + "| " + data.main.temp_max + " &#176" + "F");
        $('.min').html("Min Temperature " + "| " + data.main.temp_min + " &#176" + "F");
        // cordinates
        $('.lat').html("Latitude " + "| " + data.coord.lat + " %");
        $('.lon').html("Longitude " + "| " + data.coord.lon);
        // wind
        $('.speed').html("Wind Speed " + "| " + data.wind.speed + " mph");
        $('.deg').html("Wind " + "| " + data.wind.deg + " &#176");
        // cloudiness
        $('.cloudiness').html("Cloud " + "| " + data.clouds.all + " %");

        // weather
        let weather = $(data.weather);

        const $description = $('.description');
        const $mainWeather = $('.main');
        // console.log(data.snow);
        // looping through weather array
        for (let wArray of weather) {
          $mainWeather.html("Weather " + "| " + wArray.main);
          $description.html(wArray.main + " with " + wArray.description);
          let $WeatherIcon = wArray.icon
          console.log($WeatherIcon);
          console.log(wArray);
          let iconUrl = `http://openweathermap.org/img/wn/${$WeatherIcon}.png`
          $('.weather-icon').attr('src', iconUrl)

          // $WeatherIcon.html(wArray.icon);

          // console.log(wArray.main);
        }

        $(event.currentTarget).reset()

      },
      (error) => {

      }
    );
      // $ajax ends here
  });
      // eventlister ends here


});
