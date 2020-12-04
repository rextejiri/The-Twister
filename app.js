$(() => {

  $.ajax({
      url:`http://api.openweathermap.org/data/2.5/weather?zip=75249&appid=530e784297febf79825bcc72dc838534`
  }).then(
    (data) => {
    console.log(data);
  },(erro) => {

  })






})
