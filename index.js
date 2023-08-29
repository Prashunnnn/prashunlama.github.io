// selecting class
const temp = document.querySelector(".temp");
const hum = document.querySelector(".hum");
const pre = document.querySelector(".pre");
const wind = document.querySelector(".wnd");
const date = document.querySelector(".dte");
const pone = document.querySelector(".pone");
const ptwo = document.querySelector(".ptwo");
const pthree = document.querySelector(".pthree");
const pfour = document.querySelector(".pfour");
const pfive = document.querySelector(".pfive");
const psix = document.querySelector(".psix");
const tone = document.querySelector(".tone");
const ttwo = document.querySelector(".ttwo");
const tthree = document.querySelector(".tthree");
const tfour = document.querySelector(".tfour");
const tfive = document.querySelector(".tfive");
const tsix = document.querySelector(".tsix");
const hone = document.querySelector(".hone");
const htwo = document.querySelector(".htwo");
const hthree = document.querySelector(".hthree");
const hfour = document.querySelector(".hfour");
const hfive = document.querySelector(".hfive");
const hsix = document.querySelector(".hsix");
const wone = document.querySelector(".wone");
const wtwo = document.querySelector(".wtwo");
const wthree = document.querySelector(".wthree");
const wfour = document.querySelector(".wfour");
const wfive = document.querySelector(".wfive");
const wsix = document.querySelector(".wsix");
const done = document.querySelector(".done");
const dtwo = document.querySelector(".dtwo");
const dthree = document.querySelector(".dthree");
const dfour = document.querySelector(".dfour");
const dfive = document.querySelector(".dfive");
const dsix = document.querySelector(".dsix");
const dtone = document.querySelector(".dtone");
const dttwo = document.querySelector(".dttwo");
const dtthree = document.querySelector(".dtthree");
const dtfour = document.querySelector(".dtfour");
const dtfive = document.querySelector(".dtfive");
const dtsix = document.querySelector(".dtsix");
const img = document.querySelector(".main-img");
const ione = document.querySelector(".img-one");
const itwo = document.querySelector(".img-two");
const ithree = document.querySelector(".img-three");
const ifour = document.querySelector(".img-four");
const ifive = document.querySelector(".img-five");
const isix = document.querySelector(".img-six");
const getCity = document.querySelector(".search-city");
const name = document.querySelector(".name-city");

//function for current city
function currentCity(city) {
  cityAvailable = localStorage.getItem(city);
  //if data available in local storage.
  if (cityAvailable) {
    cityData = JSON.parse(cityAvailable);
    getFromLocalStorage(cityData); //calling another function
  } else {
    fetch(`now.php?city=${city}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log("Data From - API (Network)");
        // setting to string before setting in local storage
        setData = JSON.stringify(data);
        localStorage.setItem(city, setData);
        name.innerHTML = `${city.toUpperCase()}, ${data[1]}`;
        temp.innerHTML = `${data[0].Temperature}°C`;
        hum.innerHTML = `${data[0].Humidity}%`;
        pre.innerHTML = `${data[0].Pressure} mha`;
        wind.innerHTML = `${data[0].Windspeed} km/hr`;
        date.innerHTML = `${data[0].DateTime}`;
        img.src = `https://openweathermap.org/img/w/${data[0].Icon}.png`;
      });
  }
}
// initial call (assigned city)
currentCity("Birendranagar");

function getFromLocalStorage(data) {
  // when data available in local storage
  console.log("Current Data From - Local Storage");
  if (!getCity.value) {
    name.innerHTML = "BIRENDRANAGAR, NP";
  } else {
    name.innerHTML = `${getCity.value.toUpperCase()}, ${data[1]}`;
  }
  temp.innerHTML = `${data[0].Temperature}°C`;
  hum.innerHTML = `${data[0].Humidity}%`;
  pre.innerHTML = `${data[0].Pressure} mha`;
  wind.innerHTML = `${data[0].Windspeed} km/hr`;
  date.innerHTML = `${data[0].DateTime}`;
  img.src = `https://openweathermap.org/img/w/${data[0].Icon}.png`;
}

function citySearchPast(city) {
  fetch(`past.php?city=${city}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data[6]);
      pone.innerHTML = `${data[0].Pressure} mha`;
      ptwo.innerHTML = `${data[1].Pressure} mha`;
      pthree.innerHTML = `${data[2].Pressure} mha`;
      pfour.innerHTML = `${data[3].Pressure} mha`;
      pfive.innerHTML = `${data[4].Pressure} mha`;
      psix.innerHTML = `${data[5].Pressure} mha`;

      tone.innerHTML = `${data[0].Temperature}°C`;
      ttwo.innerHTML = `${data[1].Temperature}°C`;
      tthree.innerHTML = `${data[2].Temperature}°C`;
      tfour.innerHTML = `${data[3].Temperature}°C`;
      tfive.innerHTML = `${data[4].Temperature}°C`;
      tsix.innerHTML = `${data[5].Temperature}°C`;

      hone.innerHTML = `${data[0].Humidity}%`;
      htwo.innerHTML = `${data[1].Humidity}%`;
      hthree.innerHTML = `${data[2].Humidity}%`;
      hfour.innerHTML = `${data[3].Humidity}%`;
      hfive.innerHTML = `${data[4].Humidity}%`;
      hsix.innerHTML = `${data[5].Humidity}%`;

      wone.innerHTML = `${data[0].Windspeed} km/hr`;
      wtwo.innerHTML = `${data[1].Windspeed} km/hr`;
      wthree.innerHTML = `${data[2].Windspeed} km/hr`;
      wfour.innerHTML = `${data[3].Windspeed} km/hr`;
      wfive.innerHTML = `${data[4].Windspeed} km/hr`;
      wsix.innerHTML = `${data[5].Windspeed} km/hr`;

      done.innerHTML = `${data[0].Description}`;
      dtwo.innerHTML = `${data[1].Description}`;
      dthree.innerHTML = `${data[2].Description}`;
      dfour.innerHTML = `${data[3].Description}`;
      dfive.innerHTML = `${data[4].Description}`;
      dsix.innerHTML = `${data[5].Description}`;

      dtone.innerHTML = data[0].DateTime;
      dttwo.innerHTML = data[1].DateTime;
      dtthree.innerHTML = data[2].DateTime;
      dtfour.innerHTML = data[3].DateTime;
      dtfive.innerHTML = data[4].DateTime;
      dtsix.innerHTML = data[5].DateTime;

      ione.src = `https://openweathermap.org/img/w/${data[0].Icon}.png`;
      itwo.src = `https://openweathermap.org/img/w/${data[1].Icon}.png`;
      ithree.src = `https://openweathermap.org/img/w/${data[2].Icon}.png`;
      ifour.src = `https://openweathermap.org/img/w/${data[3].Icon}.png`;
      ifive.src = `https://openweathermap.org/img/w/${data[4].Icon}.png`;
      isix.src = `https://openweathermap.org/img/w/${data[5].Icon}.png`;
    });
}
//initial call of assigned city
citySearchPast("Birendranagar");

function searchMe() {
  //when button clicked by user.
  currentCity(getCity.value);
  citySearchPast(getCity.value);
}

\