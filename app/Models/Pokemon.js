
export default class Pokemon{

  constructor({name, img, weight, height, type, forms, id, sprites}){
    this.name = name;
    this.img = img || sprites.other.dream_world.front_default;
    this.weight = weight;
    this.height = height;
    this.type = type;
    this.id = id; //Id can be number from pokedex or sandbox genereated
    // NOTE this is the identifier for pokeAPI
    this.forms = forms
  }

  get Template(){
    let realWeight = this.weight + ''
    realWeight = realWeight.split('').splice(realWeight.length-2,0,'.').join()
    console.log('weight:', realWeight)
    let type = this.type.join(" ")
    return /*html*/ `
    <div class="row col-right-mon">
      <div class="col-md-12 text-left">
        <h3>Active Pokemon:</h3>
        <img src="${this.img}"
        alt="${this.name}">
        <h4>Pokemon: ${this.name}</h4>
        <p><b>Height: </b> ${this.height}</p>
        <p><b>Weight: </b> ${realWeight}kg</p>
        <p><b>Type: </b>${type}</p>
    </div>
    ${this.Button}
    `
  }

  get Button(){
    let template = ''
    if(this.forms){
      template += /*html*/`
      <div class="col-md-12 pb-2 d-flex justify-content-end align-items-end">
        <button type="button" class="btn btn-danger"
        onclick="app.myPokemonsController.removeMon()" "disabled">Release!</button>
        <button type="button" class="btn btn-success" onclick="app.myPokemonsController.addMon()">Catch!</button>
      </div>
      `
      return template
    }
    template += /*html*/`
    <div class="col-md-12 pb-2 d-flex justify-content-end align-items-end">
      <button type="button" class="btn btn-danger"
      onclick="app.myPokemonsController.removeMon()">Release!</button>
      <button type="button" class="btn btn-success" onclick="app.myPokemonsController.addMon()" "disabled">Catch!</button>
    </div>
    `
  }

  get ImgClickable(){
    return /*html*/ `
      <img src="${this.img}"
      alt="${this.name}" onclick= "add.pokemonsController.getMon('${this.id}')">
      </div>
    `
  }

  get MyImgClickable(){
    return /*html*/ `
    <img src="${this.img}"
    alt="${this.name}" onclick= "add.myPokemonsController.SetMon('${this.id}')">
    `
  }
}