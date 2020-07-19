window.onload = function () {
  const article1 = document.querySelectorAll('.article-animation')[0];

  article1.addEventListener('click', function () {
    article1.style.animationName = 'article-grow';
  });

  article1.addEventListener('mouseout', function () {
    article1.style.animationName = '';
  });
};
