import './styles/main.css'
import loadHtml from './HTMLpopulate'
import clouds from './assets/Clouds.png'
import snow from './assets/Snow.png'
import rain from './assets/Rain.png'
import drizzle from './assets/Drizzle.png'
import thunder from './assets/Thunderstorm.png'
import clear from './assets/Clear.png'
import visibility from './assets/visibility.png'
const content = document.querySelector('#content')
content.append(loadHtml())


const $temp = document.querySelector('.temp')
const $form = document.querySelector('form')
const $description = document.querySelector('.description')
const $location = document.querySelector('.location-cont')
const $icon = document.querySelector('.weather-icon')
const $toggler = document.querySelector('.toggler')

const key = 'f9213bc01baa653cae1bd65bdc08a5bb'
let city = 'Madrid'
let toggler = true 
let units = 'metric'



const rareConditions = ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado' ]

/* --------- WEATHER API AND MAIN SCRIPT ------- */
async function getWeatherData() {
    let adress = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`
    let response = await fetch(adress, {mode: 'cors'})
    let weather = await response.json()
    let data = await weather.main
    $temp.innerHTML = `${Math.round(data.temp)}°`
    $description.innerHTML = `${weather.weather[0].description.toUpperCase()}`
    let cityUpper = city.charAt(0).toUpperCase() + city.slice(1) // capitilizing in js sucks
    let country  = weather.sys.country
    $location.children[1].innerHTML = `${cityUpper}, ${country}`

    let status = weather.weather[0].main
    if (rareConditions.includes(status)){
        $icon.src = visibility
    }else{
        $icon.src = `./assets/${status}.png`
    }
}


/* ----------- FORM DATA HANDLING ------------- */
$form.addEventListener('submit', handleSubmit)
function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);   /* this form data thing is so nice */
    let cityObj = Object.fromEntries(formData.entries())
    city = cityObj.querry
    getWeatherData()
}

/* ------------ c2f -------------------- */
$toggler.addEventListener('click', () => {
    $toggler.querySelector('span:nth-child(1)').classList.toggle('active')
    $toggler.querySelector('span:nth-child(2)').classList.toggle('active')
    toggler = !toggler
    if (toggler){
        units = 'metric'
    }else{
        units = 'imperial'
    }
    getWeatherData()
})


getWeatherData()
