const cities = [
    {name: "Houston", population: 2099451, landmark: "NASA Space Center"},
    {name: "Los Angeles", population: 3792621, landmark: "Hollywood Sign"},
    {name: "New York", population: 8175133, landmark: "Statue of Liberty"},
    {name: "Chicago", population: 2695598, landmark: "Willis Tower"},
    {name: "Philadelphia", population: 1526006, landmark: "Independence Hall"},
];

const sort = document.querySelector("#sort");
sort.addEventListener("click", function() {
    result.innerHTML = "";
    cities.sort((a, b) => b.population - a.population);
    allCities(cities);
});

const submit = document.querySelector("#submit");
const result = document.querySelector("#result");

const allCities = (all) => {
    all.map((city) => {
        result.innerHTML += 
            `<div>
            <span class="city-info">City</span>: ${city.name}, 
            <span class="city-info">Population</span>: ${commafy(city.population)}, 
            <span class="city-info">Landmark</span>: ${city.landmark}
            </div>`;
    });
}
allCities(cities);

function commafy(num) {
    var str = num.toString().split('.');

    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }

    return str.join('.');
}

let filterCities = () => {
    const search = document.querySelector("#search");
    const searchTerm = search.value.toLowerCase();

    let cityUpdate = cities.filter(city => city.name.toLowerCase().includes(searchTerm));

    result.innerHTML = "";

    if (cityUpdate.length !== 0) {
        cityUpdate.forEach((cityUpdate) => {
            result.innerHTML += 
                `<div>
                <span class="city-info">City</span>: ${cityUpdate.name}, 
                <span class="city-info">Population</span>: ${commafy(cityUpdate.population)}, 
                <span class="city-info">Landmark</span>: ${cityUpdate.landmark}
                </div>`;
        });
    }
}

submit.addEventListener("click", filterCities);
document.addEventListener("keyup", filterCities);