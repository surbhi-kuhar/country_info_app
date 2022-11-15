let search = document.getElementById("search-btn");
let country_Inp = document.getElementById("country-inp");

const searchfunc = () => {
  let country_name = country_Inp.value;
  document.querySelector(".container").style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + country_name + "')";

  // REST COUNTRIES
  // --full name URL
  let url = `https://restcountries.com/v3.1/name/${country_name}?fullText=true`;

  country_Inp.value = "";
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data[0]);
      // console.log(data[0].capital[0]);
      // console.log(data[0].continents[0]);
      // console.log(Object.keys(data[0].currencies)[0]);
      // console.log(data[0].currencies[Object.keys(data[0].currencies)[0]].name);
      // console.log(data[0].currencies[Object.keys(data[0].currencies)[0]].symbol);
      // console.log(Object.values(data[0].languages).toString().split(",").join(","));
      // console.log(Object.values(data[0].maps)[0]);

      result.innerHTML = `<img src="${data[0].flags.svg}" class="flag">
    <table class="table"><tr><td class="info">Capital:</td><td>${
      data[0].capital[0]
    }</td></tr>
    <tr><td class="info">Continent:</td><td>${data[0].continents[0]}</td></tr>
    <tr><td class="info">Currency:</td><td>${
      Object.keys(data[0].currencies)[0]
    } (${data[0].currencies[Object.keys(data[0].currencies)[0]].name})</td></tr>
    <tr><td class="info">Currency Symbol:</td><td>${
      data[0].currencies[Object.keys(data[0].currencies)[0]].symbol
    }</td></tr>
    <tr><td class="info">Languages Spoken:</td><td>${Object.values(
      data[0].languages
    )
      .toString()
      .split(",")
      .join(",")}</td></tr>
    <tr><td class="info">Population:</td><td>${data[0].population}</td></tr>
    <tr><td class="info">Timezone :</td><td>${data[0].timezones[0]}</td></tr>
    </table>
    `;
    });
};

document.querySelector("#search-btn").addEventListener("click", () => {
  searchfunc();
});

document.querySelector("#country-inp").addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    searchfunc();
  }
});
