// // const http = require("http");
// const https = require("https");

// //print response function(to go in response.end part of the call)
// function printResults(streamInfo) {
//   // create html element and populate
// }

// //print error function
// function printError(error) {
//   console.error(error);
// }
// //api call
// function getFlows(location) {
//   try {
//     const request = https.get(
//       `https://streamstats.usgs.gov/streamstatsservices/flowstatistics.json?rcode=${location}`,
//       function(response) {
//         if (response.statusCode === 200) {
//           let body = "";
//           response.on("data", data => {
//             body += data;
//           });
//           response.on("end", () => {
//             let streamInfo = JSON.parse(body);
//             console.dir(streamInfo[2]);
//           });
//         } else {
//           console.log(response.statusCode);
//         }
//       }
//     );
//   } catch (error) {
//     printError(error.message);
//   }
// }

// //export module
// // module.exports.getFlows = getFlows;

// getFlows("CO");

const rivers = document.querySelectorAll(".rivers");
const riverBtns = document.querySelectorAll(".river-buttons button");

//Set animas as initial view
for (let river of rivers) {
   river.style.display = "none";
}
document.getElementById("Animas-Durango").style.display = "block";

//add event listener to all buttons
for (let button of riverBtns) {
   button.addEventListener("click", riverSelect);
}

//callback function to execute on click/ display correct graph for river chosen
function riverSelect(event) {
   event.preventDefault();
   for (let river of rivers) {
      river.style.display = "none";
   }
   document.getElementById(event.target.textContent).style.display = "block";
   return false;
}
