const API_URL = "https://icanhazdadjoke.com/"


const fetchJoke = (data) => {
  let joke1 = document.getElementById('jokeContainer');
  joke1.innerHTML = data;
}

const myObject = { 
  method: 'GET',
  headers: { 'Accept': 'application/json' }
}

fetch(API_URL, myObject)
  .then((response) => response.json())
  .then((data) => fetchJoke(data.joke))
        

window.onload = () => fetchJoke()
        
