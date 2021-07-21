import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { myMonApi } from "./AxiosService.js";

class MyPokemonsService {
  async removeMon() {
    let mon = ProxyState.activeMon
    const res = myMonApi.delete(mon.id)
    console.log('deleteming mon,', res.data)
    ProxyState.monsCaught = ProxyState.monsCaught.filter(m => m.name != mon.name)
  }
  async addMon() {
    let mon = ProxyState.activeMon
    const res = myMonApi.post(mon.id)
    console.log('catching mon,', res.data)
    ProxyState.monsCaught = [...ProxyState.monsCaught, new Pokemon(res.data)]
  }
  SetMon(id) {
    ProxyState.activeMon = ProxyState.monsCaught.find(m => m.id == id)
  }


}

export const myPokemonsService = new MyPokemonsService()