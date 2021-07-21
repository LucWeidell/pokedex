import MyPokemonsController from "./Controllers/myPokemonsController.js";
import PokemonsController from "./Controllers/PokemonsController.js";



class App {
  pokemonsController = new PokemonsController()
  myPokemonsController = new MyPokemonsController()
}

window["app"] = new App();
