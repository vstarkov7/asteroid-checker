const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed?';
const API_KEY = 'x2jCKgixJAakYYz6lUItiiDx4V8MZMvGR5SGzmNn'
const START_DATE = '2018-12-12'
const END_DATE = '2018-12-16'
const buttonPic = document.querySelector('#pic_day');
const buttonAsteroids = document.querySelector('#check_asteroids')
const picContainer = document.querySelector('#pic_of_day_container')

const REQUEST_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`

// button.addEventListener('click', async () => {
//   console.log(3)
// });

// button.addEventListener('click', async () => {
//   let response = await axios.get(`${REQUEST_URL}`);
//   let responseData = response.body.near_earth_objects
//   console.log(responseData)
// });
// button.addEventListener('click', async () => {
//   let breed = breedInput.value;
//   let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
//   let dogPic = response.data.message;
//   imageDiv.innerHTML = `<img src=${dogPic}>`;
// });


// button.addEventListener('click', async () => {
//   let response = await axios.get(REQUEST_URL);
//   let sampleData = response.data;
//   console.log(sampleData)

// });

const PIC_BASE_URL = 'https://api.nasa.gov/planetary/apod'
// const DATE = '2019-12-20'
const picInputDate = document.querySelector("#pic_input_date")

function goToPicAnchor() {
  window.location = '#pic_anchor';
}


buttonPic.addEventListener('click', async (event) => {
  event.preventDefault()
  try {
    const DATE = picInputDate.value;
    const PIC_REQUEST_URL = `${PIC_BASE_URL}?api_key=${API_KEY}&date=${DATE}`
    let response = await axios.get(PIC_REQUEST_URL);
    let sampleData = response.data;
    console.log(sampleData)
    let pictureLink = response.data.hdurl;
    let pictureExplanation = response.data.explanation
    picContainer.innerHTML = `<img id="pic_anchor" alt="NASA's picture of the day for ${DATE}" src="${pictureLink}"></img>
  <div class="explanation">${pictureExplanation}</div>`
  }
  catch (error) {
    console.log(error)
  }
  goToPicAnchor()
}
);

