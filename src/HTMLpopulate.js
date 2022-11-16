const loadHtml = () => {
    const populate = document.createElement('div')
    populate.classList.add('populate')

    /* --------------- IMG ------------- */
    const pic = document.createElement('img')
    pic.classList.add('weather-icon')
    populate.append(pic)
    /* --------- temp gauge ------------ */
    let temp = document.createElement('div')
    temp.classList.add('temp')
    populate.append(temp)
    /* ---------- search bar ---------- */
    const searchContainer = document.createElement('form')
    const searchBox = document.createElement('input')
    const searchBtn = document.createElement('btn')
    searchContainer.classList.add('search-bar')
    searchContainer.setAttribute('action', '')
    searchBox.classList.add('search-box')
    searchBox.setAttribute('type', 'text')
    searchBox.setAttribute('name', 'querry')
    searchBtn.classList.add('no-style-btn')
    searchBtn.classList.add('material-symbols-outlined')
    searchBtn.classList.add('search-btn')
    searchBtn.setAttribute('type', 'submit')
    searchBtn.innerText = 'search'
    searchContainer.append(searchBox,searchBtn)
    populate.append(searchContainer)
    /* ----------- Description ---------- */
    const description = document.createElement('div')
    description.classList.add('description')
    populate.append(description)
    /* ------------- Location ---------- */
    const locationContainer = document.createElement('div')
    locationContainer.classList.add('location-cont')
    const locationSymbol = document.createElement('div')
    locationSymbol.classList.add('material-symbols-outlined')
    locationSymbol.innerHTML = 'location_on'
    const locationValue = document.createElement('div')
    locationContainer.append(locationSymbol, locationValue)
    populate.append(locationContainer)
    /* ----------- f2c btn ------------ */
    const f2c = document.createElement('div')
    f2c.classList.add('toggler')
    const f = document.createElement('span')
    const c = document.createElement('span')
    c.classList.add('active')
    c.innerText = 'C°'
    f.innerHTML = 'F°'
    f2c.append(c,f)
    populate.append(f2c)



    return populate
}

export default loadHtml