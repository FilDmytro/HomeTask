const xhttp = new XMLHttpRequest();

const outWeather = document.querySelector(".out-weather");
const API_Key = "AjPwXK5X9JGszyOvwGSUkPke71wHW1gH";
const getDataWeather = document.getElementById("btnGetWeather");
getDataWeather.addEventListener("click", getWeather, { once: true });

function getWeather() {
  let weatherArr;
  let cityKey = document.querySelector("#city").value;
  xhttp.open(
    "GET",
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_Key}`
  );
  xhttp.send();
  xhttp.onload = function () {
    if (this.status === 200) {
      const result = JSON.parse(this.response);
      weatherArr = result.DailyForecasts;
    }

    weatherArr.forEach((weatherArr) => {
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

      ul.append(li);
      li.append(ourDate);
      li.append(spanMinTemp);
      li.append(spanMaxTemp);
      li.append(dayIconPhrase);
      li.append(nightIconPhrase);

      li.classList.add("list-item");
      spanMinTemp.classList.add("min-temp");
      spanMaxTemp.classList.add("max-temp");
      dayIconPhrase.classList.add("day-Phrase");
      nightIconPhrase.classList.add("night-Phrase");
      ourDate.classList.add("date-style");

      const listStyle = document.getElementsByClassName("list-item");
      const convertedArray = Array.from(listStyle);
      for (let i = 0; i < convertedArray.length; i++) {
        if (i % 2 === 0) {
          convertedArray[i].classList.add("bg-Color");
        }
      }
    });
  };
}
