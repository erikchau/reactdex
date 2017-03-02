import {combineReducers} from 'redux'
import {
  REQUEST_POKEMON,
  RECIEVE_POKEMON,
  TOGGLE_POKEMON
} from  '../actions/actions'

function pokemon (state = {}, action) {
  switch (action.type) {
    case REQUEST_POKEMON:
    case RECIEVE_POKEMON:
      return Object.assign({}, state, {
        pokemon: pokemonProgress(state.pokemon, action)
      });
    default:
      return state;
  }
}

function pokemonProgress(state, action) {
    switch (action.type) {
      case REQUEST_POKEMON:
        return Object.assign({}, state, {
          fetching: true
        });
      case RECEIVE_POKEMON:
        return Object.assign({}, state, {
          fetching: false,
          pokemon: action.pokemon
        });
      default:
        return state;
    }
}

function caughtPokemon (state = [], action) {
  switch(action.type) {
    case TOGGLE_POKEMON
  }
}

const rootReducer = combineReducers( {
  pokemon,
  caughtPokemon
})


{
  pokemon: {
    isFetching
    mons
  }
  caughtpokemon
}
