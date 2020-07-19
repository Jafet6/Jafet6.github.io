
  let textColor = document.getElementsByClassName("rgb-adivinhe")[0];

  function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return "(" + r + ", " + g + ", " + b + ")";
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  textColor.innerHTML = getRandomRgb();
  let correctBall = (document.getElementsByClassName("ball")[getRandomInt(0, 6)].style.backgroundColor = "rgb" + textColor.innerHTML);

  function getRandomRgb1() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  function color() {
    for (let i = 0; i < 6; i++) {
      if (document.querySelectorAll(".ball")[i].style.backgroundColor === "rgb" + textColor.innerHTML) {
        correctBall;
      } else {
        document.querySelectorAll(".ball")[i].style.backgroundColor = getRandomRgb1(); 
      }
    }
  }
  color();

  let resp = document.getElementsByClassName("resp")[0];
  let placar = document.getElementsByClassName("score")[0];

  let cont = 0;
  for (let i = 0; i < 6; i++) {
    document.querySelectorAll(".ball")[i].addEventListener("click", function() {
      if (document.querySelectorAll(".ball")[i].style.backgroundColor === "rgb" + textColor.innerHTML) {
        cont = cont + 3;
        placar.innerHTML = +cont;
        resp.innerHTML = "Acertou!";
      } else {
        resp.innerHTML = "Errou! Tente novamente!";
      }
    });
  }

  let restartButton = document.querySelectorAll(".restart")[0];
  restartButton.addEventListener("click", function() {
    textColor.innerHTML = getRandomRgb();
    correctBall = (document.getElementsByClassName("ball")[getRandomInt(0, 6)].style.backgroundColor = "rgb" + textColor.innerHTML)
    color();
  });
