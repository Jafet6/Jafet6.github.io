window.onload = function() {
  let backgColor = document.getElementById("backgroundColor");
  let txColor = document.getElementById("textColor");
  let txSize = document.getElementById("textSize");
  let spBetween = document.querySelector("#lineHeight");
  let ftFamily = document.getElementById("fontFamily");

  function changingColor() {
    if(typeof(Storage) != "undefined"){
      document.body.style.backgroundColor = backgColor.value;
      localStorage.setItem("Background-Color",backgColor.value);
    }
  }
  backgColor.addEventListener("change", changingColor);

  if (localStorage.getItem("Background-Color")) {
    document.body.style.backgroundColor = localStorage.getItem("Background-Color");
  };

  function changingTxColor() {
    if(typeof(Storage) != "undefined"){
      document.body.style.color = txColor.value;
      localStorage.setItem("Text-Color",txColor.value);
    }
  }
  txColor.addEventListener("change", changingTxColor);

  if (localStorage.getItem("Text-Color")) {
    document.body.style.color = localStorage.getItem("Text-Color");
  };

  function changingFontSize() {
    if (typeof(Storage) != "undefined"){
      document.body.style.fontSize = txSize.value + "px";
      localStorage.setItem("Text-Size", txSize.value + "px");
    }
  };
  txSize.addEventListener("change", changingFontSize);
  
  if (localStorage.getItem("Text-Size")){
    document.body.style.fontSize = localStorage.getItem("Text-Size");
  }

  function changingLineHeight() {
    if (typeof(Storage) != "undefined"){
      document.body.style.lineHeight = spBetween.value + "px";
      localStorage.setItem("Line-Height", spBetween.value + "px");
    }
  };
  spBetween.addEventListener("change", changingLineHeight);

  if(localStorage.getItem("Line-Height")) {
    document.body.style.lineHeight = localStorage.getItem("Line-Height");
  }

  function changingFontFamily() {
    if(typeof(Storage) != "undefined") {
      document.body.style.fontFamily = ftFamily.value;
      localStorage.setItem("Font-Family", ftFamily.value)
    }
  }
  ftFamily.addEventListener("change", changingFontFamily);

  if(localStorage.getItem("Font-Family")) {
    document.body.style.fontFamily = localStorage.getItem("Font-Family");
  }

}