var countdown =new Date();
countdown =new Date(countdown.getFullYear() +1 , countdown.getMonth() -6 , 1);

var x = setInterval(function(){
    var now =new Date();
    var diff= countdown - now;


    var months = Math.floor(diff/(30*24*60*60*1000));
    var days = Math.floor(diff % (30*24*60*60*1000) /(24*60*60*1000));
    var hours = Math.floor(diff % (24*60*60*1000) /(60*60*1000));
    var minutes = Math.floor(diff % (60*60*1000) /(60*1000));
    var seconds = Math.floor(diff % (60*1000) / 1000);



    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML= days;
    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds;
}, 1000);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()