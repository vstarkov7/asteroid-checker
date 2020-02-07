const API_KEY = 'x2jCKgixJAakYYz6lUItiiDx4V8MZMvGR5SGzmNn'
const buttonPic = document.querySelector('#pic_day');
const picContainer = document.querySelector('#pic_of_day_container')
const picInput = document.querySelector('#pic_input_date')
const PIC_BASE_URL = 'https://api.nasa.gov/planetary/apod'
const picInputDate = document.querySelector("#pic_input_date")

function goToPicAnchor() {
  window.location = '#pic_anchor';
}

function isValidDate(dateString) {
  let regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateString.match(regEx)) return false;  // Invalid format
  let d = new Date(dateString);
  let dNum = d.getTime();
  if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0, 10) === dateString;
}

picInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    buttonPic.click();
  }
})

buttonPic.addEventListener('click', async (event) => {
  event.preventDefault()
  const DATE = picInputDate.value;
  if (!isValidDate(DATE)) {
    document.querySelector(".input_date_error").style.opacity = '1'
    return
  } else { document.querySelector(".input_date_error").style.opacity = '0' }
  try {
    // const DATE = picInputDate.value;
    const PIC_REQUEST_URL = `${PIC_BASE_URL}?api_key=${API_KEY}&date=${DATE}`
    let response = await axios.get(PIC_REQUEST_URL);
    let pictureLink = response.data.hdurl;
    let pictureExplanation = response.data.explanation
    picContainer.innerHTML = `<img id="pic_anchor" alt="NASA's picture of the day for ${DATE}" src="${pictureLink}"></img>
  <div class="explanation">${pictureExplanation}</div>`
  }
  catch (error) {
    console.log(error)
  }
  setTimeout(function () { goToPicAnchor(); }, 100)
}
);

