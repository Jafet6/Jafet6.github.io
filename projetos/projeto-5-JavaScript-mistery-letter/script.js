window.onload = function() {
  let inputText = document.getElementsByClassName("texto")[0];
  let buttonCreate = document.getElementsByClassName("create-text")[0]

  arrayStyle = ["newspaper", "magazine1", "magazine2"];
  arrayTam = ["medium", "big", "reallybig"];
  arrayDegree = ["skewleft", "skewright"];
  arrayRot = ["rotateleft", "rotateright"]
  
  function createArray() {
    let arrayText = inputText.value.split(" ");
    console.log(arrayText);
    let p = document.getElementsByClassName("mistery")[0];
    p.innerHTML = "";
    for(let i = 0; i < arrayText.length; i++) {
      let span = document.createElement("SPAN");
      span.innerHTML = arrayText[i]
      span.classList.add(arrayStyle[Math.floor(Math.random() * arrayStyle.length)]);
      span.classList.add(arrayTam[Math.floor(Math.random() * arrayTam.length)]);
      span.classList.add(arrayDegree[Math.floor(Math.random() * arrayDegree.length)])
      span.classList.add(arrayRot[Math.floor(Math.random() * arrayRot.length)])
      p.appendChild(span)
      let cont = document.getElementsByClassName("contador")[0];
      cont.innerHTML = arrayText.length;
    }; 
  };
  
  function addEventListenerToSpan() {
    let arrayText = inputText.value.split(" ");
    for(let j = 0; j < arrayText.length; j++) {
      document.getElementsByTagName("span")[j].addEventListener("click", function() {
        document.getElementsByTagName("span")[j].classList = "";
        document.getElementsByTagName("span")[j].classList.add(arrayStyle[Math.floor(Math.random() * arrayStyle.length)]);
        document.getElementsByTagName("span")[j].classList.add(arrayTam[Math.floor(Math.random() * arrayTam.length)]);
        document.getElementsByTagName("span")[j].classList.add(arrayDegree[Math.floor(Math.random() * arrayDegree.length)]);
        document.getElementsByTagName("span")[j].classList.add(arrayRot[Math.floor(Math.random() * arrayRot.length)]);
      })
    };
  }
  buttonCreate.addEventListener("click", function() {
    createArray();
    addEventListenerToSpan();
  })
}