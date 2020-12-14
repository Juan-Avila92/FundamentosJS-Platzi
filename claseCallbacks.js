const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

$.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}` )
