$(() => {
  let feels_like = $('.feels_like')
  $.ajax({
      url:`http://api.openweathermap.org/data/2.5/weather?zip=75249&appid=530e784297febf79825bcc72dc838534`
  }).then(
    (data) => {
      // const weather = $(data.weather)
      // $('.city').html(data.main.pressure)
      // for (let kkk of weather) {
      //   feels_like.html(kkk.description)
      //   feels_like.css('color', 'red')
      //   console.log(data.main);
      }

  },(erro) => {

  })






})
