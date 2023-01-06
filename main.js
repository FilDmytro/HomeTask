const outWeather = document.querySelector(".out-weather");
const API_Key = "AjPwXK5X9JGszyOvwGSUkPke71wHW1gH";
const getDataWeather = document.getElementById("btnGetWeather");
getDataWeather.addEventListener("click", getCityKey);

async function getCityKey() {
  const URL =
    "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=";
  const city = document.querySelector("#city").value.replace(" ", "");
  try {
    const response = await fetch(`${URL}${API_Key}&q=${city}`);
    if (response.status === 200) {
      const parsedJSON = await response.json();
      const cityKey = parsedJSON[0].Key;
      getWeather(cityKey);
    }
  } catch (error) {
    invalidResponseHandler();
  }
}

async function getWeather(cityKey) {
  let weatherArr;
  const baseURL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  try {
    const response = await fetch(`${baseURL}${cityKey}?apikey=${API_Key}`);
    if (response.status === 200) {
      const parsedJSON = await response.json();
      weatherArr = parsedJSON.DailyForecasts;
      renderDataWeather(weatherArr);
      getNeighbors(cityKey);
    }
  } catch (error) {
    invalidResponseHandler();
  }
}

async function getNeighbors(cityKey) {
  let neighbors;
  const neighborsURL =
    "http://dataservice.accuweather.com/locations/v1/cities/neighbors/";
  try {
    const response = await fetch(`${neighborsURL}${cityKey}?apikey=${API_Key}`);
    if (response.status === 200) {
      const parsedJSON = await response.json();
      neighbors = parsedJSON;
      renderDataNeighbors(neighbors);
    }
  } catch (error) {
    invalidData();
  }
}

function renderDataWeather(data) {
  const weatherList = document.querySelector(".weather-list");
  weatherList.innerHTML = "";

  data.forEach((weatherArr) => {
    const ul = document.querySelector(".weather-list");
    const li = document.createElement("li");
    const spanMinTemp = document.createElement("span");
    const spanMaxTemp = document.createElement("span");
    const dayIconPhrase = document.createElement("span");
    const nightIconPhrase = document.createElement("span");
    const ourDate = document.createElement("span");

    spanMinTemp.innerHTML = `min ${Math.round(
      (weatherArr.Temperature.Minimum.Value - 32) / 1.8
    )} &deg;`;
    spanMaxTemp.innerHTML = `max ${Math.round(
      (weatherArr.Temperature.Maximum.Value - 32) / 1.8
    )} &deg;`;
    dayIconPhrase.innerHTML = `The Day is ${weatherArr.Day.IconPhrase}`;
    nightIconPhrase.innerHTML = `The Night is ${weatherArr.Night.IconPhrase}`;
    ourDate.innerHTML = `${weatherArr.Date.slice(0, -15).replace(
      /^(\d+)-(\d+)-(\d+)$/,
      `$3.$2.$1`
    )}`;

    li.classList.add("list-item");
    spanMinTemp.classList.add("min-temp");
    spanMaxTemp.classList.add("max-temp");
    dayIconPhrase.classList.add("day-Phrase");
    nightIconPhrase.classList.add("night-Phrase");
    ourDate.classList.add("date-style");

    ul.append(li);
    li.append(
      ourDate,
      spanMinTemp,
      spanMaxTemp,
      dayIconPhrase,
      nightIconPhrase
    );
  });
}

function renderDataNeighbors(data) {
  const ul = document.querySelector(".neighbors-list");
  ul.innerHTML = "";

  data.forEach((neighbors) => {
    const { LocalizedName } = neighbors;
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.classList.add("neighbors-link");
    span.setAttribute("id", LocalizedName);
    span.innerHTML = `${LocalizedName}`;
    ul.append(li);
    li.append(span);
  });

  const getDataNeighborWeather = document.querySelector(".neighbors-list");
  getDataNeighborWeather.addEventListener("click", getWeatherChooseNeighbor);

  async function getWeatherChooseNeighbor(e) {
    const selectedNeighbor = e.target.id;
    const URL =
      "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=";
    try {
      const response = await fetch(`${URL}${API_Key}&q=${selectedNeighbor}`);
      if (response.status === 200) {
        const parsedJSON = await response.json();
        const cityKey = parsedJSON[0].Key;
        getWeather(cityKey);
      }
    } catch (error) {
      invalidData();
    }
  }
}

const errorResponse = document.createElement("h2");
errorResponse.classList.add("error");
outWeather.append(errorResponse);

function invalidData() {
  errorResponse.innerHTML = "Something went wrong";
}

function invalidResponseHandler() {
  errorResponse.innerHTML = "City not Found";
}
