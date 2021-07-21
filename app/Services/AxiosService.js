export const monApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 100000
})

export const myMonApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/LucWeidell/',
  timeout: 5000
})