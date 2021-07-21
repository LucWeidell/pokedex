export const monApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=151',
  timeout: 5000
})

export const myMonApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/classroom/',
  timeout: 5000
})