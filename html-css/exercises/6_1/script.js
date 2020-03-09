window.onload = function() {
  let estado = document.getElementsByClassName("estados-brasileiros")[0];
  let arrayEstados = ["Selecionado", "Minas Gerais", "São Paulo", "Rio Grande do Sul"]
  let data = document.getElementsByClassName("date-validation")[0];
  let email = document.getElementsByClassName("email-regexp")[0];
  
  

  email.addEventListener("change", function(){
    let re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if(re.test(email.value)){
      return console.log("Email");
    } else {
      return alert("Não é email");
    }  
  })
  
  for (let indice in arrayEstados){
    let option = document.createElement("option");
    estado.appendChild(option);
    option.innerHTML = arrayEstados[indice];
  }

  data.addEventListener("change", function(){
    let reg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if(reg.test(data.value)){
      return true;
    } else {
      return false;
    }
  })

  

}