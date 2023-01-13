var userInput = document.getElementById("userInput");
var searchButton = document.getElementById("searchButton");
var starCheck = document.getElementById("starCheck");
var planetCheck = document.getElementById("planetCheck");
var infoSection = document.getElementById("infoSection");
var image1Section=document.getElementById("image1");
var image2Section= document.getElementById("image2");
var image3Section= document.getElementById("image3");

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

// //https://api-ninjas.com/api/stars for document regarding fetching data








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
    period.textContent= data[0].period + " " + data[0].name + " day is 1 yeah on earth ";

    infoSection.appendChild(namePlanet);
    infoSection.appendChild(distanceLy);
    infoSection.appendChild(mass);
    infoSection.appendChild(temperature);
    infoSection.appendChild(period);
  });
  }


function fetchNasa(input){
  var nasaUrl="https://images-api.nasa.gov/search?q="+ input + "&media_type=image";
  fetch(nasaUrl)
  .then(function (response) {
         return response.json();
     })
      .then(function (data) {
         console.log(data);
        image1Section.textContent="";
        image2Section.textContent="";
        image3Section.textContent="";
        var image1 = document.createElement("img");
        var image2 = document.createElement("img");
        var image3 = document.createElement("img");

        image1.setAttribute("src",data.collection.items[0].links[0].href);
        image2.setAttribute("src",data.collection.items[1].links[0].href);
        image3.setAttribute("src",data.collection.items[2].links[0].href);
        image1Section.appendChild(image1);
        image2Section.appendChild(image2);
        image3Section.appendChild(image3);


     });
  }



  // fetchNasa();
// searchButton.addEventListener('click', fetchPlanet("mars"));


searchButton.addEventListener("click", function() {
  if(planetCheck.value=="on"){
    fetchPlanet(userInput.value);
    fetchNasa(userInput.value);
  }else if(starCheck.value=="on"){
    fetchStar(userInput.value);
  }
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

