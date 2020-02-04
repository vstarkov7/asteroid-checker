const BASE_URL = 'https://nasaapidimasv1.p.rapidapi.com/getClosestAsteroids/';
const API_KEY = '9b13dda9e4msh401173caed97f0bp18b290jsn463e1ee997ca'
const button = document.querySelector('button');
// const accessPoint = `${BASE_URL}${endpoint}?api_key=${API_KEY}`
// const movieInput = document.querySelector('#blank')
// const button = document.querySelector("button");
// const movieList = document.querySelector(".movie-list")
// const movieNameDiv = document.querySelector(".movie-name")
// const moviePosterDiv = document.querySelector(".movie-poster")

button.addEventListener("click", async () => {
  // const categoryId = SELECT[SELECT.selectedIndex].id;
  try {
    let response = await axios.post(`${BASE_URL}`,
      {
        "x-rapidapi-host": 'NasaAPIdimasV1.p.rapidapi.com',
        "x-rapidapi-key": `${API_KEY}`,
        "content-type": 'application/x-www-form-urlencoded'
      }
    )
    console.log(response.body)
    console.log(3)
    // can make the response link as a separate variable and use that
    // catPic.innerHTML = `<img src="${response.data[0].url}">`
  } catch (error) {
    console.log(error)
  }


}
)