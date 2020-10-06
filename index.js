/*
Create a search bar that filters a list of cities by name.

https://www.javascripttutorial.net/javascript-array-filter/

1. Display a page with the cities below, their population,
and a famous landmark. Use javascript to populate the page.
2. Create a search bar using the input tag. When a user types
into the search bar only the cities where the search characters
overlap should be displayed on the page. Make the search bar
case-insensitive. For example: If a user types in 'hou' the
page should only show Houston.

Grading criteria:
1. Use the filter() function to complete this assignment.
2. There should be at least two functions. One should populate
the page when the page loads. The other should filter when
the user types into the search bar.
3. Use only ES6+ techniques if needed: template strings (`${}`),
arrow functions, forEach(), etc.
4. Use GitHub and make at least 5 commits with meaningful commit
messages in the present tense. For example: "Create filter function."
5. Do not have any extraneous comments beyond explanations of
code (if needed) in your final result. Do not have any console.logs,
in comments or otherwise.
6. CSS is not necessary and will not be graded but is encouraged 
for the sake of practice.

Ungraded Stretch Goals:
1. Create a dropdown using the select element. The dropdown 
will have two options: name and landmark. The selected option 
will change how the list is being filtered. For instance, if 
the landmark option is chosen the search bar will filter using 
the text in landmark instead of name.

2. Use the sort() function to sort the cities by population 
on load. Do not manually shift the objects within the array.

3. Create a button that, when clicked, changes the list from 
sorted ascending by population to sorted descending by 
population, and vice-versa.
*/

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