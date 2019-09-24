// Get the modal
let artist = document.querySelector(".artist");

// Get the button that opens the modal
let button = document.querySelector(".btn");

// Get the <span> element that closes the modal
let spanClose = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
button.onclick = function() {
  artist.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanClose.onclick = function() {
  artist.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == artist) {
    artist.style.display = "none";
  }
}