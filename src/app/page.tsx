import { makeRequest} from "@/helpers/requests";
import { GET_POKEMONS} from "@/helpers/querys";
import {pokemonsQuantity} from "@/helpers/constants";
import {Pokemon} from "@/types/types";
import PokemonsList from "@/components/PokemonsList";
const getPokemons = async () => {
  return await makeRequest(GET_POKEMONS, pokemonsQuantity)
}
export default async function Home() {
  const pokemons:[Pokemon] = await getPokemons().then(res => res.data.pokemons)
  return (
      <main>
        <PokemonsList pokemons={pokemons}/>
      </main>
  )
}
