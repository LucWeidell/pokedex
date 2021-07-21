import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";


function _drawAll(){
  let template = '<h3>All Pokemon:</h3>'
  ProxyState.allMons.forEach(m => template += m.ImgClickable)
  document.getElementById('all-mons').innerHTML = template
}

function _drawActive(){
  let template =  ProxyState.activeMon.Template
  document.getElementById('active-mon').innerHTML = template
}

export default class PokemonsController {

  constructor() {
    ProxyState.on('allMons', _drawAll)
    ProxyState.on('activeMon', _drawActive)

    this.getAllMons()
  }

  async getAllMons(){
    try {
      await pokemonsService.getAllMons()
    } catch (error) {
      console.log('error getting pokedex mon:', error)
    }
  }

   getMon(id){
    try {
      pokemonsService.getMon(id)
    } catch (error) {
      console.log('error getting this mon:', error)
    }
  }


}

