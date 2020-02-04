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
      let hazardous = asteroidData[i].is_potentially_hazardous_asteroid
      if (hazardous) {
        hazardousValue = `Hazardous`

        asteroidContainer.innerHTML += `<div class="individual_asteroid_container"><div class="specific_asteroid_info">Name: ${name}</div><div class="specific_asteroid_info">Diameter: ${diameter} kilometers</div><div class="specific_asteroid_info">Miss Distance: ${distance} kilometers</div><div class="specific_asteroid_info">Potentially hazardous? <div class="hazardous">${hazardousValue}</div></div></div>`
      }
      else {
        hazardousValue = `Not hazardous`

        asteroidContainer.innerHTML += `<div class="individual_asteroid_container">
    <div class="specific_asteroid_info">Name: ${name}</div>
    <div class="specific_asteroid_info">Diameter: ${diameter} kilometers</div>
    <div class="specific_asteroid_info">Miss Distance: ${distance} kilometers</div>
    <div class="specific_asteroid_info">Potentially hazardous? ${hazardousValue}</div>
  </div>`
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