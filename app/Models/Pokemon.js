
export default class Pokemon{

  constructor({name, img, weight, height, type, forms, id}){
    this.name = name;
    this.img = img;
    this.weight = weight;
    this.height = height;
    this.type = type;
    this.id = id; //Id can be number from pokedex or sandbox genereated
    // NOTE this is the identifier for pokeAPI
    this.forms = forms
  }

  get Template(){
    // FIXME fix template
    return /*html*/ `
    sadasdasds
    `
  }

  get Button(){
    if(this.forms){

    }
  }
}