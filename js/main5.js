const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed?';
const API_KEY = 'x2jCKgixJAakYYz6lUItiiDx4V8MZMvGR5SGzmNn'
const START_DATE = '2018-12-12'
const END_DATE = '2018-12-16'
const buttonPic = document.querySelector('#pic_day');
const buttonAsteroids = document.querySelector('#check_asteroids')
const picContainer = document.querySelector('#pic_of_day_container')
const asteroidContainer = document.querySelector('#asteroid_container')

const REQUEST_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`


const ASTEROID_BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed?'
const asteroidInputDate = document.querySelector('#asteroid_input_date')

buttonAsteroids.addEventListener('click', async (event) => {
  event.preventDefault()
  try {
    const DATE = asteroidInputDate.value;
    const ASTEROID_REQUEST_URL = `${ASTEROID_BASE_URL}start_date=${DATE}&end_date=${DATE}&api_key=${API_KEY}`
    let response = await axios.get(ASTEROID_REQUEST_URL);
    let sampleData = response.data;
    let asteroidData = response.data.near_earth_objects[`${DATE}`]
    let hazardous_check = asteroidData[0].is_potentially_hazardous_asteroid
    console.log(hazardous_check)
    console.log(asteroidData)
    console.log(sampleData)
    asteroidContainer.innerHTML = '';
    for (let i = 0; i < asteroidData.length; i++) {
      let name = asteroidData[i].name
      let diameter = (asteroidData[i].estimated_diameter.kilometers.estimated_diameter_max + asteroidData[i].estimated_diameter.kilometers.estimated_diameter_min) / 2
      let distance = asteroidData[i].close_approach_data[0].miss_distance.kilometers
      let diameterDisplay = parseFloat(diameter).toFixed(3)
      let distanceDisplay = parseFloat(distance).toFixed(1)
      let estArea = 4 * Math.PI * Math.pow(diameter / 2, 2)
      if (estArea > 14) {
        let ratioPercentage = Math.round((estArea / 59.1 * 100))
        let insertPicture = `<img alt="Photo of Manhattan" src="./img/manhattan.jpg">
        <div class="photo_caption">This asteroid is roughly ${ratioPercentage}% the size of Manhattan</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Potentially hazardous`

          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameterDisplay} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distanceDisplay} km</div>
            <div class="specific_asteroid_info">Danger Level: <div class="hazardous">${hazardousValue}</div>
            </div>
          </div>
          <div class="diameter_container">
          ${insertPicture}
          </div>
        </div>`      }
        else {
          hazardousValue = `Not hazardous`
          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameterDisplay} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distanceDisplay} km</div>
            <div class="specific_asteroid_info">Danger Level: ${hazardousValue}
            </div>
          </div>
          <div class="diameter_container">
            ${insertPicture}
          </div>
        </div>`
        }
      }
      else if (estArea > 7) {
        let ratioPercentage = Math.round((estArea / 14 * 100))
        let insertPicture = `<img alt="Photo of an airport" src="./img/airport.jpg">
        <div class="photo_caption">This asteroid is roughly ${ratioPercentage}% the size of the LAX airport</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Hazardous`

          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameterDisplay} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distanceDisplay} km</div>
            <div class="specific_asteroid_info">Danger Level: <div class="hazardous">${hazardousValue}</div>
            </div>
          </div>
          <div class="diameter_container">
          ${insertPicture}
          </div>
        </div>`      }
        else {
          hazardousValue = `Not hazardous`
          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameterDisplay} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distanceDisplay} km</div>
            <div class="specific_asteroid_info">Danger Level: ${hazardousValue}
            </div>
          </div>
          <div class="diameter_container">
            ${insertPicture}
          </div>
        </div>`
        }
      }
      else if (estArea > 1) {
        let ratioPercentage = Math.round((estArea / 3.41 * 100))
        let insertPicture = `<img alt="Photo of Central Park" src="./img/central-park.jpg">
        <div class="photo_caption">This asteroid is roughly ${ratioPercentage}% the size of Central Park</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Hazardous`

          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameterDisplay} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distanceDisplay} km</div>
            <div class="specific_asteroid_info">Danger Level: <div class="hazardous">${hazardousValue}</div>
            </div>
          </div>
          <div class="diameter_container">
          ${insertPicture}
          </div>
        </div>`      }
        else {
          hazardousValue = `Not hazardous`
          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameterDisplay} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distanceDisplay} km</div>
            <div class="specific_asteroid_info">Danger Level: ${hazardousValue}
            </div>
          </div>
          <div class="diameter_container">
            ${insertPicture}
          </div>
        </div>`
        }
      }
      else if (estArea > 0.05) {
        let ratioPercentage = Math.round((estArea / 0.44 * 100))
        let insertPicture = `<img alt="Photo of Vatican City" src="./img/vatican.jpg">
        <div class="photo_caption">This asteroid is roughly ${ratioPercentage}% the size of Vatican City</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Hazardous`

          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameterDisplay} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distanceDisplay} km</div>
            <div class="specific_asteroid_info">Danger Level: <div class="hazardous">${hazardousValue}</div>
            </div>
          </div>
          <div class="diameter_container">
          ${insertPicture}
          </div>
        </div>`      }
        else {
          hazardousValue = `Not hazardous`
          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameterDisplay} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distanceDisplay} km</div>
            <div class="specific_asteroid_info">Danger Level: ${hazardousValue}
            </div>
          </div>
          <div class="diameter_container">
            ${insertPicture}
          </div>
        </div>`
        }
      }
      else if (estArea > 0.005351215104) {
        let ratioPercentage = Math.round((estArea / 0.01 * 100))
        let insertPicture = `<img alt="Photo of a Manhattan city block" src="./img/block.jpg">
        <div class="photo_caption">This asteroid is roughly ${ratioPercentage}% the size of a Manhattan city block</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Hazardous`

          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameter.toFixed(3)} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distance.toFixed(3)} km</div>
            <div class="specific_asteroid_info">Danger Level: <div class="hazardous">${hazardousValue}</div>
            </div>
          </div>
          <div class="diameter_container">
          ${insertPicture}
          </div>
        </div>`      }
        else {
          hazardousValue = `Not hazardous`
          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameter.toFixed(3)} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distance.toFixed(3)} km</div>
            <div class="specific_asteroid_info">Danger Level: ${hazardousValue}
            </div>
          </div>
          <div class="diameter_container">
            ${insertPicture}
          </div>
        </div>`
        }
      }
      else if (estArea > 0.003) {
        let ratioPercentage = Math.round((estArea / 0.005351215104 * 100))
        let insertPicture = `<img alt="Photo of an NFL football field" src="./img/nfl-field.jpg">
        <div class="photo_caption">This asteroid is roughly ${ratioPercentage}% the size of a football NFL field</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Hazardous`

          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameter.toFixed(3)} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distance.toFixed(3)} km</div>
            <div class="specific_asteroid_info">Danger Level: <div class="hazardous">${hazardousValue}</div>
            </div>
          </div>
          <div class="diameter_container">
          ${insertPicture}
          </div>
        </div>`      }
        else {
          hazardousValue = `Not hazardous`
          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameter.toFixed(3)} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distance.toFixed(3)} km</div>
            <div class="specific_asteroid_info">Danger Level: ${hazardousValue}
            </div>
          </div>
          <div class="diameter_container">
            ${insertPicture}
          </div>
        </div>`
        }
      }
      else if (estArea > 0.0005) {
        let ratioPercentage = Math.round((estArea / 0.00151682874 * 100))
        let insertPicture = `<img alt="Photo of an ice hockey rink" src="./img/hockey-rink.jpg">
        <div class="photo_caption">This asteroid is roughly ${ratioPercentage}% the size of an ice hockey rink</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Hazardous`

          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameter.toFixed(3)} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distance.toFixed(3)} km</div>
            <div class="specific_asteroid_info">Danger Level: <div class="hazardous">${hazardousValue}</div>
            </div>
          </div>
          <div class="diameter_container">
          ${insertPicture}
          </div>
        </div>`      }
        else {
          hazardousValue = `Not hazardous`
          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameter.toFixed(3)} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distance.toFixed(3)} km</div>
            <div class="specific_asteroid_info">Danger Level: ${hazardousValue}
            </div>
          </div>
          <div class="diameter_container">
            ${insertPicture}
          </div>
        </div>`
        }
      }
      else {
        let ratioPercentage = Math.round((estArea / 0.0003542 * 100))
        let insertPicture = `<img alt="Photo of an IMAX movie theater screen" src="./img/imax.jpg">
        <div class="photo_caption">This asteroid is roughly ${ratioPercentage}% the size of an IMAX theater screen</div>`
        let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
        if (hazardous) {
          hazardousValue = `Hazardous`

          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameter.toFixed(3)} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distance.toFixed(3)} km</div>
            <div class="specific_asteroid_info">Danger Level: <div class="hazardous">${hazardousValue}</div>
            </div>
          </div>
          <div class="diameter_container">
          ${insertPicture}
          </div>
        </div>`      }
        else {
          hazardousValue = `Not hazardous`
          asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
          <div class="text_statistics">
            <div class="specific_asteroid_info">Name: ${name}</div>
            <div class="specific_asteroid_info">Avg Diameter: ${diameter.toFixed(3)} km
            </div>
            <div class="specific_asteroid_info">Miss Distance: ${distance.toFixed(3)} km</div>
            <div class="specific_asteroid_info">Danger Level: ${hazardousValue}
            </div>
          </div>
          <div class="diameter_container">
            ${insertPicture}
          </div>
        </div>`
        }
      }
    }
  }
  catch (error) {
    console.log(error)
  }
});

  // let pictureLink = response.data.hdurl;
  // let pictureExplanation = response.data.explanation
  // picContainer.innerHTML = `<img alt="NASA's picture of the day for ${DATE}" src="${pictureLink}"></img>
  // <div class="explanation">${pictureExplanation}</div>`

    // event.preventDefault
  // event.stopImmediatePropagation()