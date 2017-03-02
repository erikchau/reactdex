const REQUEST_POKEMON = 'REQUEST_POKEMON';
const RECIEVE_POKEMON = "RECIEVE_POKEMON"
const TOGGLE_POKEMON = 'TOGGLE_POKEMON';

function fetchPokemon(){
  return dispatch => {
    dispatch(requestPokemon());
    let promise = new Promise( resolve, reject => {
      let req = new XMLHttpRequest();
      req.open("GET", "http://pokeapi.co/api/v2/pokemon-species/?limit=1000");
      req.onreadystatechange = () => {
        if (this.readyState == 4) {
          if (this.status == 200) {
            resolve(JSON.parse(this.responseText))
          } else {
            reject(this.responseText)
          }
        }
      };
      req.send();
    });
    promise.then((data) => {
      dispatch(recievePokemon(data))
    })
  }
}

function requestPokemon(){
  return {
    type: REQUEST_POKEMON
  }
}

function recievePokemon(pokemon) {
  return {
    type: RECIEVE_POKEMON,
    pokemon
  }
}

function togglePokemon (pokemon){
  return {
    type: TOGGLE_POKEMON,
    pokemon
  }
}
