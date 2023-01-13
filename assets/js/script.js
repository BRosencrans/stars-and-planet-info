var userInput = document.getElementById("userInput");
var searchButton = document.getElementById("searchButton");
var planetCheck = document.getElementById("planetCheck");
var starCheck = document.getElementById("starCheck");


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
// https://api-ninjas.com/api/planets for document regarding fetching data
var planetUrl= "https://api.api-ninjas.com/v1/planets?name=" + userInput.value;
//https://api-ninjas.com/api/stars for document regarding fetching data
var starUrl = "https://api.api-ninjas.com/v1/stars?name=" + userInput.value;

var requestUrl = 'https://images-api.nasa.gov/search?q=' + userInput.value + '&media_type=image';

searchButton.addEventListener("click", createUrl);

function createUrl () {
  planetUrl= "https://api.api-ninjas.com/v1/planets?name=" + userInput.value;
  starUrl = "https://api.api-ninjas.com/v1/stars?name=" + userInput.value;
  requestUrl = 'https://images-api.nasa.gov/search?q=' + userInput.value + '&media_type=image';
}

planetCheck.addEventListener("click", function() {
  console.log(planetCheck.value)
})

starCheck.addEventListener("click", function() {
  console.log(starCheck.value)
})


function fetchStar(){
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
      console.log(data);
    });
  }
  
function fetchPlanet(){
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
      
      fetchStar();
      fetchPlanet();
      
