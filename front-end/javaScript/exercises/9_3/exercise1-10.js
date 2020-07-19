// function hello (name) {
//   name = typeof name !== 'undefined' ? name : 'World';
//   console.log('Hello ' + name);
// }

// hello('People'); Hello People
// hello(); Hello World;

function hello (name = 'World') {
  console.log(`Hello ${name}`);
}

hello('People'); //Hello People
hello(); //Hello World;
