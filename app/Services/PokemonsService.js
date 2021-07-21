import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { monApi } from "./AxiosService.js"

class PokemonsService{

  async getAllMons() {
    let apiEnd = 'pokemon?limit=100'
    const res = await monApi.get(apiEnd)
    console.log('getAllmons:', res.data)
    ProxyState.allMons = res.data.results.map(element => new Pokemon(element))
  }

  getMon(id) {
    ProxyState.activeMon = ProxyState.allMons.find(m => m.id==id)
  }


}

export const pokemonsService = new PokemonsService()