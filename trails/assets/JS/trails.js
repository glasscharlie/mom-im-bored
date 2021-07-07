var mainElement = document.querySelector("#content")
var render = 0

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  } else {
    console.log("Geolocation is not supported by this browser.")
  }
}
getLocation()


let locationArray = [];
function successFunction(position) {
  locationArray.push(new Location(position.coords.latitude,position.coords.longitude))
}

function errorFunction(position) {
 console.warn('error')
}

function Location(lat, lon) {
  this.lat = lat;
  this.lon = lon;
}

async function trailApi(event) {
    await new Promise(r => setTimeout(r, 2000));
    fetch(`https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking&lon=${locationArray[0].lon}&limit=25&lat=${locationArray[0].lat}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "0b51268387msh50321ee7c231960p14fcabjsn22a73e77760d",
        "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
      }
    })
    .then(function (response) {
      return response.json();
    })
    .then(response => {

      for (let i = 0; i < response.places.length; i++) {
        if(response.places[i].description !== null && render < 4) {
              
            console.log(render)
            var div = document.createElement("div")
            div.setAttribute(`class`,`card`) 
            div.className += ' cell small-4 large-offset-1'
            div.style.width = '33%'
            var titleDiv = document.createElement("div")
            titleDiv.setAttribute(`class`,`card-divider`)
            div.appendChild(titleDiv)
            var title = document.createElement("h3")
            var description = document.createElement("p")
            title.textContent = response.places[i].name
            description.textContent = response.places[i].description
            mainElement.appendChild(div)
            titleDiv.appendChild(title)
            var mapDiv = document.createElement("div")
            mapDiv.setAttribute(`id`,`map${i}`)
            mapDiv.setAttribute(`class`,`mapDiv`)
            mapDiv.style.height = "300px"
            mapDiv.style.width = '400px'
            div.appendChild(mapDiv)
            var desDiv = document.createElement("div")
            desDiv.setAttribute(`class`,`card-section`)
            div.appendChild(desDiv)
            desDiv.appendChild(description)
            
            var map = L.map(`map${i}`).setView([response.places[i].lat, response.places[i].lon], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([response.places[i].lat, response.places[i].lon]).addTo(map)
            render++
          }
        
      }
      })
    .catch(err => {
      console.error(err);
    });


  }
  
    trailApi()

