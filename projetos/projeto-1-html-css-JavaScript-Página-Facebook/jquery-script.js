$(document).ready(function(){
  $("#registration-form").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true,
        email: {matches:"[0-9]+",minlength:9, maxlength:9},
      },
      password: {
        required: true,
        minlength: 6,
      },
      bithdate: {
        required: true,
        date: true,
      }
    },
    messages: {
      firstname: "É necessário um nome",
      lastname: "É necessário um sobrenome",
      email: {
        required: "É necessário um e-mail",
        email: "E-mail inválido",
      },
      password: {
        required: "É necessário uma senha",
        minlength: "Mínimo de caracteres: 6",
      },
      bithdate: {
        required: "É necessário uma data de nascimento",
        date: "Formato da data: dd/mm/aaaa",
      },
    }
  })

  $(".button-register").click({
    
  })
})
