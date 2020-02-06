const API_KEY = 'x2jCKgixJAakYYz6lUItiiDx4V8MZMvGR5SGzmNn'
const buttonPic = document.querySelector('#pic_day');
const picContainer = document.querySelector('#pic_of_day_container')
const picInput = document.querySelector('#pic_input_date')
const PIC_BASE_URL = 'https://api.nasa.gov/planetary/apod'
const picInputDate = document.querySelector("#pic_input_date")

// function goToPicAnchor() {
//   window.location = '#pic_anchor';
// }


picInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    buttonPic.click();
  }
})

buttonPic.addEventListener('click', async (event) => {
  event.preventDefault()
  try {
    const DATE = picInputDate.value;
    const PIC_REQUEST_URL = `${PIC_BASE_URL}?api_key=${API_KEY}&date=${DATE}`
    let response = await axios.get(PIC_REQUEST_URL);
    let pictureLink = response.data.hdurl;
    let pictureExplanation = response.data.explanation
    picContainer.innerHTML = `<img alt="NASA's picture of the day for ${DATE}" src="${pictureLink}"></img>
  <div class="explanation">${pictureExplanation}</div>`
  }
  catch (error) {
    console.log(error)
  }
}
);

