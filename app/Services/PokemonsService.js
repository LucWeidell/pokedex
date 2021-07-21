import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { monApi } from "./AxiosService.js"

class PokemonsService{

  async getAllMons() {
    let apiEnd = 'pokemon?limit=100'
    const res = await monApi.get(apiEnd)
    console.log('getAllmons:', res.data)
    // TODO refactor away from 2 getters
    for (let i = 1; i <= res.data.results.length; i++) {
      const res2 = monApi.get('pokemon/'+i)
      console.log('get A pok:', res2)
      ProxyState.allMons = [...ProxyState.allMons, new Pokemon(res2.data.results)]
    }
    // const res2 = await res.data.results.forEach(e => {
    //   let mon = monApi.get(e)

    }
    //ProxyState.allMons = res.data.results.map(element => new Pokemon(element))

  getMon(id) {
    ProxyState.activeMon = ProxyState.allMons.find(m => m.id==id)
  }


}

export const pokemonsService = new PokemonsService()