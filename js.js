// Get the modal
let toro = document.querySelector("#toroModal");
let blood = document.querySelector('#bloodModal');
let washed = document.querySelector('#washedModal');
let tycho = document.querySelector('#tychoModal');

// Get the button that opens the modal
let button = document.querySelector(".btn");
let toroButton = document.querySelector("#toroBtn");
let bloodButton = document.querySelector("#bloodBtn");
let washedButton = document.querySelector('#washedBtn');
let tychoButton = document.querySelector('#tychoBtn');

// Get the <span> element that closes the modal
let spanToro = document.getElementsByClassName("closeToro")[0];
let spanBlood = document.getElementsByClassName("closeBlood")[0];
let spanWashed = document.getElementsByClassName("closeWashed")[0];
let spanTycho = document.getElementsByClassName("closeTycho")[0];

// When the user clicks the button, open the modal 
/*button.onclick = function() {
  toro.style.display = "block";
}*/

toroButton.onclick = function() {
  toro.style.display = "block";
}

bloodButton.onclick = function() {
  blood.style.display = "block";
}

washedButton.onclick = function(){
  washed.style.display = "block";
}

tychoButton.onclick = function(){
  tycho.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanToro.onclick = function() {
  toro.style.display = "none";
}

spanBlood.onclick = function() {
  blood.style.display = "none";
}

spanWashed.onclick = function(){
  washed.style.display = "none";
}

spanTycho.onclick = function(){
  tycho.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == toro) {
    toro.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == blood) {
    blood.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == washed) {
    washed.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == tycho) {
    tycho.style.display = "none";
  }
}