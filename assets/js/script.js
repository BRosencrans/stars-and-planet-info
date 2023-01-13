var userInput = document.getElementById("userInput");
var searchButton = document.getElementById("searchButton");
var starCheck = document.getElementById("starCheck");
var planetCheck = document.getElementById("planetCheck");
var infoSection = document.getElementById("infoSection");


//loads background on page open
window.addEventListener("load", function (){
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=NhPFpaLICBNtgWJTI0edILu5U5CcPKT8T4Fd2w2l" )
      .then((response) => response.json())
      .then((data) => {
        document.body.style.backgroundImage = `url("${data.url}")`;
        })
})

//fetch for planet and Stars
// // https://api-ninjas.com/api/planets for document regarding fetching data
// var planetUrl= "https://api.api-ninjas.com/v1/planets?name=" + userInput.value;
// //https://api-ninjas.com/api/stars for document regarding fetching data
// var starUrl = "https://api.api-ninjas.com/v1/stars?name=" + userInput.value;

// var requestUrl = 'https://images-api.nasa.gov/search?q=' + userInput.value + '&media_type=image';

// // searchButton.addEventListener("click", createUrl);

// function createUrl () {
//   planetUrl= "https://api.api-ninjas.com/v1/planets?name=" + userInput.value;
//   starUrl = "https://api.api-ninjas.com/v1/stars?name=" + userInput.value;
//   requestUrl = 'https://images-api.nasa.gov/search?q=' + userInput.value + '&media_type=image';
// }

planetCheck.addEventListener("click", function(){
    if (this.click) {
      planetCheck.value = true;
      starCheck.value = false;
    } 
})

starCheck.addEventListener("click", function() {
  if(this.click){
    starCheck.value = true;
    planetCheck.value = false;
  }
})

function fetchStar(input){
  starUrl = "https://api.api-ninjas.com/v1/stars?name=" + input;
  fetch(input, {
    method: 'GET',
    headers: {
      "X-Api-Key": "zHz6WuU2dGG/x9UJduaV2A==XNhUxVpkiNv1mI2r",
      'Content-Type': "application/json",
    },
  })
  .then(function (response) {
    return response.json();
    })
    .then(function (data) {
      console.log(data);
      var nameStar = document.createElement("h5");
      var constellation = document.createElement("p");
      var distanceLY = document.createElement("p");
      var declination = document.createElement("p");

      nameStar.textContent="Star: " + data[0].name;
      constellation.textContent ="constellation: " + data[0].constellation;
      distanceLY.textContent= "Distance In Light Years: " + data[0].distance_light_year;
      declination.textContent= "Declination: " + data[0].declination;

      infoSection.appendChild(nameStar);
      infoSection.appendChild(constellation);
      infoSection.appendChild(distanceLY);
      infoSection.appendChild(declination);


    });

  }


function fetchPlanet(input){
  infoSection.textContent="";
  planetUrl= "https://api.api-ninjas.com/v1/planets?name=" + input;
  fetch(planetUrl, {
    method: 'GET',
    headers: {
      "X-Api-Key": "zHz6WuU2dGG/x9UJduaV2A==XNhUxVpkiNv1mI2r",
      'Content-Type': "application/json",
    },
  })
  .then(function (response) {
    return response.json();
  })
  
  .then(function (data) {
    console.log(data);
    var namePlanet=document.createElement("h5");
    var distanceLy= document.createElement("p");
    var mass = document.createElement("p");
    var temperature = document.createElement("p");
    var period = document.createElement("p");

    namePlanet.textContent="Planet: "+data[0].name;
    distanceLy.textContent="Distance in Light Years from Earth: "+ data[0].distance_light_year;
    mass.textContent="Total Mass of planet: " + data[0].mass;
    temperature.textContent="Temperature: " + data[0].temperature;
    period.textContent="1 Earth year is " + data[0].period + " on " + data[0].name;

    infoSection.appendChild(namePlanet);
    infoSection.appendChild(distanceLy);
    infoSection.appendChild(mass);
    infoSection.appendChild(temperature);
    infoSection.appendChild(period);
  });
  }


function fetchNasa(){
  fetch(requestUrl)
  .then(function (response) {
         return response.json();
     })
      .then(function (data) {
         console.log(data);
     });
  }


// searchButton.addEventListener('click', fetchPlanet("mars"));


searchButton.addEventListener("click", function() {
  fetchPlanet(userInput.value);
})


// function showValue(){
//   console.log(userInput.value);
// }







var testUrl= "https://api.api-ninjas.com/v1/stars?name=vega";
var testUrl1= "https://api.api-ninjas.com/v1/planets?name=Mars"
  // fetchStar(testUrl);
  // fetchPlanet(testUrl1);

      // document.addEventListener("DOMContentLoaded", function () {
      //   var elems = document.querySelectorAll("select");
      //   var instances = M.FormSelect.init(elems, options);
      // });
