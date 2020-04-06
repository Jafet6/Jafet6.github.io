const API_URL = "https://icanhazdadjoke.com/";

let joke = document.getElementById('jokeContainer');

const fetchJoke = () => {
  joke.innerHTML = 'kkk';
}

const myObject = { 
  method: 'GET',
  headers: { 'Accept': 'application/json' }
}

fetch( API_URL)
  .then((response) => console.log(response))
        

window.onload = () => fetchJoke()
        
