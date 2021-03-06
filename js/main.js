const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed?';
const API_KEY = 'x2jCKgixJAakYYz6lUItiiDx4V8MZMvGR5SGzmNn'
const buttonAsteroids = document.querySelector('#check_asteroids')
const asteroidContainer = document.querySelector('#asteroid_container')
const asteroidInput = document.querySelector('#asteroid_input_date')
const ASTEROID_BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed?'
const asteroidInputDate = document.querySelector('#asteroid_input_date')
let pos = 0;
document.querySelector("#asteroid").style.opacity = 0;
function flyAsteroid() {
  let asteroid = document.getElementById("asteroid");
  pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    let windowSize = window.innerWidth;
    if (pos == windowSize) {
      clearInterval(id);
      asteroid.style.opacity = 0;
      return;
    } else {
      asteroid.style.opacity = 1;
      pos++;
      asteroid.style.top = pos + 'px';
      asteroid.style.right = pos + 'px';
    }
  }
}
function isValidDate(dateString) {
  let regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateString.match(regEx)) return false;  // Invalid format
  let d = new Date(dateString);
  let dNum = d.getTime();
  if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0, 10) === dateString;
}
function asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture) {
  let hazardous_class = ''
  if (hazardousValue == 'Potentially hazardous') hazardous_class = 'class="hazardous"'
  asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
        <div class="text_statistics">
          <div class="specific_asteroid_info"><div>Name:</div> <div>${name}</div></div>
          <div class="specific_asteroid_info"><div>Avg Diameter:</div> <div>${diameterDisplay} km</div>
          </div>
          <div class="specific_asteroid_info"><div>Miss Distance:</div> <div>${distanceDisplay} km</div><div><div class="moon_ratio_number">${distanceMoonRatioDisplay}x</div> as far as the Moon</div></div>
          <div class="specific_asteroid_info"><div>Danger Level:</div> <div ${hazardous_class}>${hazardousValue}</div>
          </div>
        </div>
        <div class="diameter_container">
        ${insertPicture}
        </div>
      </div>`
}

asteroidInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    buttonAsteroids.click();
  }
})
buttonAsteroids.addEventListener('click', async (event) => {
  event.preventDefault()
  asteroidContainer.innerHTML = '';
  const DATE = asteroidInputDate.value;
  if (!isValidDate(DATE)) {
    document.querySelector(".input_date_error").style.opacity = '1'
    return
  } else { document.querySelector(".input_date_error").style.opacity = '0' }
  try {
    if (document.querySelector("#asteroid").style.opacity === "0") {
      flyAsteroid();
    }
    const ASTEROID_REQUEST_URL = `${ASTEROID_BASE_URL}start_date=${DATE}&end_date=${DATE}&api_key=${API_KEY}`
    let response = await axios.get(ASTEROID_REQUEST_URL);
    let sampleData = response.data;
    let asteroidData = response.data.near_earth_objects[`${DATE}`]
    let hazardous_check = asteroidData[0].is_potentially_hazardous_asteroid
    for (let i = 0; i < asteroidData.length; i++) {
      let name = asteroidData[i].name
      let diameter = (asteroidData[i].estimated_diameter.kilometers.estimated_diameter_max + asteroidData[i].estimated_diameter.kilometers.estimated_diameter_min) / 2
      let distance = asteroidData[i].close_approach_data[0].miss_distance.kilometers
      let distanceMoonRatio = distance / 384400;
      let distanceMoonRatioDisplay = parseFloat(distanceMoonRatio).toFixed(1)
      let diameterDisplay = parseFloat(diameter).toFixed(3)
      let distanceDisplay = parseFloat(distance).toFixed(1)
      let estArea = 4 * Math.PI * Math.pow(diameter / 2, 2)
      if (estArea > 14) {
        let ratioPercentage = Math.round((estArea / 59.1 * 100))
        let insertPicture = `<img alt="Photo of Manhattan" src="./img/manhattan.jpg">
        <div class="photo_caption">This asteroid's surface area is roughly ${ratioPercentage}% the size of Manhattan</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Potentially hazardous`

          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
        else {
          hazardousValue = `Not hazardous`
          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
      }
      else if (estArea > 7) {
        let ratioPercentage = Math.round((estArea / 14 * 100))
        let insertPicture = `<img alt="Photo of an airport" src="./img/airport.jpg">
        <div class="photo_caption">This asteroid's surface area is roughly ${ratioPercentage}% the size of the LAX airport</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Potentially hazardous`

          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
        else {
          hazardousValue = `Not hazardous`
          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
      }
      else if (estArea > 1) {
        let ratioPercentage = Math.round((estArea / 3.41 * 100))
        let insertPicture = `<img alt="Photo of Central Park" src="./img/central-park.jpg">
        <div class="photo_caption">This asteroid's surface area is roughly ${ratioPercentage}% the size of Central Park</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Potentially hazardous`

          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
        else {
          hazardousValue = `Not hazardous`
          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
      }
      else if (estArea > 0.05) {
        let ratioPercentage = Math.round((estArea / 0.44 * 100))
        let insertPicture = `<img alt="Photo of Vatican City" src="./img/vatican.jpg">
        <div class="photo_caption">This asteroid's surface area is roughly ${ratioPercentage}% the size of Vatican City</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Potentially hazardous`

          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
        else {
          hazardousValue = `Not hazardous`
          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
      }
      else if (estArea > 0.005351215104) {
        let ratioPercentage = Math.round((estArea / 0.01 * 100))
        let insertPicture = `<img alt="Photo of a Manhattan city block" src="./img/block.jpg">
        <div class="photo_caption">This asteroid's surface area is roughly ${ratioPercentage}% the size of a Manhattan city block</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Potentially hazardous`

          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
        else {
          hazardousValue = `Not hazardous`
          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
      }
      else if (estArea > 0.003) {
        let ratioPercentage = Math.round((estArea / 0.005351215104 * 100))
        let insertPicture = `<img alt="Photo of an NFL football field" src="./img/nfl-field.jpg">
        <div class="photo_caption">This asteroid's surface area is roughly ${ratioPercentage}% the size of a football NFL field</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Potentially hazardous`

          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
        else {
          hazardousValue = `Not hazardous`
          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)

        }
      }
      else if (estArea > 0.0005) {
        let ratioPercentage = Math.round((estArea / 0.00151682874 * 100))
        let insertPicture = `<img alt="Photo of an ice hockey rink" src="./img/hockey-rink.jpg">
        <div class="photo_caption">This asteroid's surface area is roughly ${ratioPercentage}% the size of an ice hockey rink</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Potentially hazardous`

          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
        else {
          hazardousValue = `Not hazardous`
          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
      }
      else {
        let ratioPercentage = Math.round((estArea / 0.0003542 * 100))
        let insertPicture = `<img alt="Photo of an IMAX movie theater screen" src="./img/imax.jpg">
        <div class="photo_caption">This asteroid's surface area is roughly ${ratioPercentage}% the size of an IMAX theater screen</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Potentially hazardous`

          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
        else {
          hazardousValue = `Not hazardous`
          asteroid_info(name, diameterDisplay, distanceDisplay, distanceMoonRatioDisplay, hazardousValue, insertPicture)
        }
      }
    }
  }
  catch (error) {
    console.log(error)
  }
});
