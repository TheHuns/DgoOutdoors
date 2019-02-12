//Setting the variables
const $h3 = $("#info-header");
const $intro = $("#intro");
const $text = $("#info-text");

//function to alter intro box
$intro.on("mouseover", function() {
  $h3.css("textShadow", "2px 2px #333");
  $text.css("textShadow", "2px 2px #333");
});

//Controls tabs local weather
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

//controls for global tabs
const li = document.querySelectorAll(".global-menu li");
const global = document.querySelectorAll(".global");
//set inital state
$("#snow").hide();
$("#river").hide();
$("#avalanche").hide();

function globalMenu(event) {
  event.preventDefault();
  const here = event.target;
  console.dir(here);

  for (let sections of global) {
    sections.style.display = "none";
  }

  if (event.target.innerText == "Local Weather") {
    document.querySelector("#weather").style.display = "block";
  } else if (event.target.innerText == "Snow Conditions") {
    document.querySelector("#snow").style.display = "block";
  } else if (event.target.innerText == "River Flows") {
    document.querySelector("#river").style.display = "block";
  } else if (event.target.innerText == "Avalanche Conditions") {
    document.querySelector("#avalanche").style.display = "block";
  }
  return false;
}
for (let link of li) {
  link.addEventListener("click", globalMenu);
}
