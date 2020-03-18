window.onload = function () {
  const button1 = document.querySelectorAll(".button1")[0];
  let clickCount = 0;
  button1.addEventListener("click", () => {
    clickCount++;
    document.querySelector(".count").innerHTML = clickCount;
  })
}