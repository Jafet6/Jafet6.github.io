window.onload = function () {
  let paragraph = document.getElementsByTagName("p")[0];
  let deck = document.querySelector(".verso-cartas");

  imagesArray = ["cartas/cinco-de-ouros.png", "cartas/nove-de-espadas.png", "cartas/quatro-de-paus.png", "cartas/seis-de-copas.png", "cartas/sete-de-espadas.png", "cartas/sete-de-paus.png", "cartas/tres-de-ouros.png"];
  animationArray = ["rotateZ", "scaleUp"]
  let n = 1;
  let i = 0
  

  function releaseCard () {
      if (i < 7 * n) {
        let randomCard = document.createElement("img");
        randomCard.src = imagesArray[Math.floor(Math.random() * 6)]
        randomCard.style.width = "150px";
        let anim = animationArray[Math.floor(Math.random() * 2)];
        randomCard.addEventListener("mouseover", function(){
          randomCard.style.animationName = anim;
        })
        randomCard.addEventListener("mouseout", function(){
          randomCard.style.animationName = "";
        })
        paragraph.appendChild(randomCard);
        i += 1;
      } 
      else {
        let breakLine = document.createElement("br");
        paragraph.appendChild(breakLine);
        let randomCard = document.createElement("img");
        randomCard.src = imagesArray[Math.floor(Math.random() * 6)]
        randomCard.style.width = "150px";
        let anim = animationArray[Math.floor(Math.random() * 2)];
        randomCard.addEventListener("mouseover", function(){
          randomCard.style.animationName = anim;
        })
        randomCard.addEventListener("mouseout", function(){
          randomCard.style.animationName = "";
        })
        paragraph.appendChild(randomCard);
        n += 1;
        i += 1;
      }
  }
  deck.addEventListener("click", releaseCard);


}