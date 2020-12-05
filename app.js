$(() => {
  let feels_like = $('.feels_like')
  $.ajax({
      url:`http://api.openweathermap.org/data/2.5/weather?zip=76001&appid=530e784297febf79825bcc72dc838534`
  }).then(
    (data) => {
      console.log(data.weather);
    },
    (error) => {

    }
  )

})
