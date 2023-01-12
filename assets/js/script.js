






podURL = "https://api.nasa.gov/planetary/apod?api_key=NhPFpaLICBNtgWJTI0edILu5U5CcPKT8T4Fd2w2l" 

window.addEventListener("load", function (){
    fetch(
      podURL = "https://api.nasa.gov/planetary/apod?api_key=NhPFpaLICBNtgWJTI0edILu5U5CcPKT8T4Fd2w2l" )
      .then((response) => response.json())
      .then((data) => {
        document.body.style.backgroundImage = `url("${data.url}")`;
        })
})
