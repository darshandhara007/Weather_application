const weaterapi = "5b4cf0ca8efc2737c9b5471e36833864"
const seacrhcity = document.getElementById("searchcity");
async function getdata() {
    let input=seacrhcity.value;
    console.log(input);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${weaterapi}`;
    const response = await fetch(url);
    const data = await response.json();
    let temp = ( data.main.temp - 273.15)
    console.log(temp);
    document.getElementById("show").innerText = temp.toFixed(2) + "°C";
    document.getElementById("city").innerText=data.name;
}
