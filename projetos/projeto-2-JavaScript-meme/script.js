
  let inputText = document.getElementById("text-input");
  let inputImage = document.querySelector("#meme-insert");
  let paragraph = document.getElementById("meme-text");
  function UploadingImage() {
    let img = document.getElementById("meme-image")
    img.src = URL.createObjectURL(inputImage.files[0]);
  }
  inputImage.addEventListener("change", UploadingImage);
  function writingText() {
    paragraph.innerHTML = inputText.value
  }
  inputText.addEventListener("keyup", writingText);
  let button1 = document.getElementById("button1");
  let button2 = document.getElementById("button2");
  let button3 = document.getElementById("button3");
  let containerImage = document.getElementById("meme-image-container");
  function border1() {
    containerImage.style.border = "3px dashed red";
  }
  button1.addEventListener("click", border1);
  function border2() {
    containerImage.style.border = "5px double blue";
  }
  button2.addEventListener("click", border2);
  function border3() {
    containerImage.style.border = "6px groove green";
  }
  button3.addEventListener("click", border3)
  let meme1 = document.getElementById("meme-1");
  let meme2 = document.querySelector("#meme-2");
  let meme3 = document.querySelector("#meme-3");
  let meme4 = document.getElementById("meme-4");
  function meme1Selected() {
    let img = document.getElementById("meme-image");
    img.src = "imgs/meme1.jpeg";
  }
  meme1.addEventListener("click", meme1Selected);
  function meme2Selected() {
    let img = document.getElementById("meme-image");
    img.src = "imgs/meme2.jpeg";
  }
  meme2.addEventListener("click", meme2Selected);
  function meme3Selected() {
    let img = document.getElementById("meme-image");
    img.src = "imgs/meme3.jpeg";
  }
  meme3.addEventListener("click", meme3Selected);
  function meme4Selected() {
    let img = document.getElementById("meme-image");
    img.src = "imgs/meme4.jpeg";
  }
  meme4.addEventListener("click", meme4Selected);
