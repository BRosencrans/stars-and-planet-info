var userInput = document.getElementById("userInput");
var searchButton = document.getElementById("searchButton");
var starCheck = document.getElementById("starCheck");
var planetCheck = document.getElementById("planetCheck");
var infoSection = document.getElementById("infoSection");
var image1Section=document.getElementById("image1");
var image2Section= document.getElementById("image2");
var image3Section= document.getElementById("image3");
var planetBool = true;
var starBool = false;

//loads background on page open
window.addEventListener("load", function (){
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=NhPFpaLICBNtgWJTI0edILu5U5CcPKT8T4Fd2w2l" )
      .then((response) => response.json())
      .then((data) => {
        document.body.style.backgroundImage = `url("${data.url}")`;
        })
})

//Checks and uncheck the planet box and gives it a boolean value so js know which api to fetch
planetCheck.addEventListener("click", function(){
  if (this.click) {
    planetBool = true;
    starBool = false;
  }
})

//Checks and uncheck the star box and gives it a boolean value so js know which api to fetch
starCheck.addEventListener("click", function() {
if(this.click){
  starBool = true;
  planetBool = false;
}
})

//Function to fetch Data from Stars API
function fetchStar(input){
  clearDisplay();
  starUrl = "https://api.api-ninjas.com/v1/stars?name=" + input;
  fetch(starUrl, {
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
      //if data returns nothing, it will prompt user to try again.
      if(data.length <= 0){
        var message = document.createElement("h1");
        message.textContent="No Search Results. Try Again!";
        infoSection.appendChild(message);
        
      }else{
        //creates all elements
        var nameStar = document.createElement("h5");
        var constellation = document.createElement("p");
        var distanceLY = document.createElement("p");
        var declination = document.createElement("p");
        //converts the data from api to text
        nameStar.textContent="Star: " + data[0].name;
        constellation.textContent ="constellation: " + data[0].constellation;
        distanceLY.textContent= "Distance In Light Years: " + data[0].distance_light_year;
        declination.textContent= "Declination: " + data[0].declination;
        //appends to infosection
        infoSection.appendChild(nameStar);
        infoSection.appendChild(constellation);
        infoSection.appendChild(distanceLY);
        infoSection.appendChild(declination);
        //calls function that creates the images.
        fetchNasa(input);

      }
    });

  }

//Fetches Planet API
function fetchPlanet(input){
  clearDisplay();
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
    //if data returns nothing, it will prompt user to try again.
    if(data.length<=0){
      var message = document.createElement("h1");
      message.textContent="No Search Results. Try Again!";
      infoSection.appendChild(message);
    }else{
      //creates all element
      var namePlanet=document.createElement("h5");
      var distanceLy= document.createElement("p");
      var mass = document.createElement("p");
      var temperature = document.createElement("p");
      var period = document.createElement("p");
      //converts the data from api to text
      namePlanet.textContent="Planet: "+data[0].name;
      distanceLy.textContent="Distance in Light Years from Earth: "+ data[0].distance_light_year;
      mass.textContent="Total Mass of planet (ratio compared to Jupiter's mass): " + data[0].mass;
      temperature.textContent="Temperature in Kelvin: " + data[0].temperature;
      period.textContent= data[0].period + " " + data[0].name + " day(s) is 1 year on earth ";
      //appends to infosection
      infoSection.appendChild(namePlanet);
      infoSection.appendChild(distanceLy);
      infoSection.appendChild(mass);
      infoSection.appendChild(temperature);
      infoSection.appendChild(period);
      fetchNasa(input);
    }
  });
  }

//add 3 images from the nasa database to the display
function fetchNasa(input){
  var nasaUrl="https://images-api.nasa.gov/search?q="+ input + "&media_type=image";
  fetch(nasaUrl)
  .then(function (response) {
         return response.json();
     })
      .then(function (data) {
         console.log(data);
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

//Event listener for the search button. 
searchButton.addEventListener("click", function() {
  if(planetBool){
    fetchPlanet(userInput.value);
  }else if(starBool){
    fetchStar(userInput.value);
  }
})

// Clear display
function clearDisplay(){
  image1Section.textContent="";
  image2Section.textContent="";
  image3Section.textContent="";
  infoSection.textContent="";
}


      // document.addEventListener("DOMContentLoaded", function () {
      //   var elems = document.querySelectorAll("select");
      //   var instances = M.FormSelect.init(elems, options);
      // });

