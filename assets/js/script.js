
  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('select');
  //   var instances = M.FormSelect.init(elems, options);
  // });

  

//fetch for planet and Stars
// https://api-ninjas.com/api/planets for document regarding fetching data
var planetUrl= "https://api.api-ninjas.com/v1/planets?name=Saturn";
//https://api-ninjas.com/api/stars for document regarding fetching data
var starUrl = "https://api.api-ninjas.com/v1/stars?name=vega";
//https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf for document regarding fetching data
var requestUrl = 'https://images-api.nasa.gov/search?q=neptune&media_type=image';




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

  fetchPlanet();
  fetchStar();

