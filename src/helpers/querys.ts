export const GET_POKEMONS:string = `query getPokemons($first: Int!) {
  pokemons(first: $first) {
    id
    name
    classification
    image
  }
}`
export const GET_POKEMON:string = `query getPokemon($id: String) {
  pokemon(id: $id) {
    id
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    fleeRate
    maxCP
    maxHP
    image
  }
  }`