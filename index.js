// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  const text = document.getElementById("text");
text.innerHTML.replace('This is really cool!')
});
 

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);