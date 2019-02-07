//Setting the variables
const $h3 = $("#info-header");
const $intro = $("#intro");
const $text = $("#info-text");

//function to alter intro box
$intro.on("mouseover", function() {
  $h3.css("textShadow", "2px 2px #333");
  $text.css("textShadow", "2px 2px #333");
});

//Controls tabs
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}
