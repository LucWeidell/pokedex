import { ProxyState } from "../AppState.js"
import { myPokemonsService } from "../Services/MyPokemonsService.js"

function _drawMyMons(){
  let template = '<h3>Caught Pokemon:</h3>'
  ProxyState.monsCaught.forEach(m => template += m.MyImgClickable)
  document.getElementById('my-mons').innerHTML = template
}

export default class MyPokemonsController{

  constructor(){
    ProxyState.on('monsCaught', _drawMyMons)
  }

  SetMon(id){
    try{
      myPokemonsService.SetMon(id)
    } catch (error) {
      console.log('Setting my mon to active error', error)
    }
  }

  async addMon(){
    try {
      await myPokemonsService.addMon()
    } catch (error) {
      console.log('Catching my mon error', error)
    }
  }

  async removeMon(){
    try {
      await myPokemonsService.removeMon()
    } catch (error) {
      console.log('Removing my mon error', error)
    }
  }

}