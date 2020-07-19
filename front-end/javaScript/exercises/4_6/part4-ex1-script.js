window.onload = function () {
  let personName = "";
  
  getMood = document.getElementsByTagName("button")[0];
  aName = document.getElementsByTagName("input")[0];
  dontClick = document.getElementsByTagName("button")[1];
  whatHappened = document.getElementsByTagName("button")[2]
  
  function complainMessage() {
    alert("I told you not to do that " + personName);
  };
  
  function typeAndScream() {
    document.getElementById("audio").play();
    personName = document.getElementById("name").value;
  };
  
  function goDark() {
    var body = document.getElementsByTagName("body")[0];
    if (body.className == "") {
      body.className = "dark";
    }
    else {
      body.className = "";
    }
    
  };
  
  function finishTheStory() {
    document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
  };
  
  dontClick.addEventListener("click", complainMessage);
  getMood.addEventListener("click", goDark);
  aName.addEventListener("input", typeAndScream);
  whatHappened.addEventListener("click", finishTheStory);
}