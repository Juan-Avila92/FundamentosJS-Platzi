const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 2)}`
const opts = { crossDOmain: true }

const onPeopleResponse = function (persona) {
    console.log(`hola yo soy, ${persona.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)
