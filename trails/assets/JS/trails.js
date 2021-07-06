var mainElement = document.querySelector("#content")


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  } else {
    alert('It seems like Geolocation is not enabled in your browser. Please use a browser which supports it.');
  }
}
getLocation()


let locationArray = [];
function successFunction(position) {
  locationArray.push(new Location(position.coords.latitude,position.coords.longitude))
}

function errorFunction(position) {
	alert('Error!');
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
      console.log(response.places.length)
      for (let i = 0; i < response.places.length; i++) {
        if(response.places[i].description !== null) {
          var div = document.createElement("div")
          var title = document.createElement("h3")
          var description = document.createElement("p")
          title.textContent = response.places[i].name
          description.textContent = response.places[i].description
          mainElement.appendChild(div)
          div.appendChild(title)
          div.appendChild(description)

        for (const [key, value] of Object.entries(response.places[i].activities)) {
        var li = document.createElement("li")
        li.textContent=response.places[i].activities[key].activity_type_name
        div.appendChild(li)
        console.log(response.places[i].activities[key].activity_type_name)
        }
          
        }
        }
      })
    .catch(err => {
      console.error(err);
    });

  }
  
    trailApi()

