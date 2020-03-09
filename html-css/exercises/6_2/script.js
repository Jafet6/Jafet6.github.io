// window.onload = function() {
//   let estado = document.getElementsByClassName("estados-brasileiros")[0];
//   let arrayEstados = ["Selecionado", "Minas Gerais", "São Paulo", "Rio Grande do Sul"]
//   let data = document.getElementsByClassName("date-validation")[0];
//   let email = document.getElementsByClassName("email-regexp")[0];
  

//   email.addEventListener("change", function(){
//     let re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
//     if(re.test(email.value)){
//       return console.log("Email");
//     } else {
//       return alert("Não é email");
//     }  
//   })
  
//   for (let indice in arrayEstados){
//     let option = document.createElement("option");
//     estado.appendChild(option);
//     option.innerHTML = arrayEstados[indice];
//   }

//   data.addEventListener("change", function(){
//     let reg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
//     if(reg.test(data.value)){
//       return true;
//     } else {
//       return false;
//     }
//   })

  

// }


window.onload = function() {
  data = document.getElementsByClassName("date-validation")[0].DatePickerX.init({
    mondayFirst: true,
    format: "dd/mm/yyyy",
  });
}

new window.JustValidate('.js-form', {
  rules: {
      radio: {
          required: true
      },
      checkbox: {
          required: true
      },
      checkbox2: {
          required: true
      },
      email: {
          required: true,
          email: true,
      }
  },

  focusWrongField: true,

  submitHandler: function (form, values, ajax) {
      ajax({
          url: 'https://just-validate-api.herokuapp.com/submit',
          method: 'POST',
          data: values,
          async: true,
          callback: function (response) {
              alert('AJAX submit successful! \nResponse from server:' + response)
          },
          error: function (response) {
              alert('AJAX submit error! \nResponse from server:' + response)
          }
      });
  },
  
  invalidFormCallback: function (errors) {
      console.log(errors);
  },
});

