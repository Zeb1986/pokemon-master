import { makeRequest} from "@/helpers/requests";
import { GET_POKEMONS, GET_POKEMON} from "@/helpers/querys";
import { pokemonsQuantity } from "@/helpers/constants";
import PokemonCard from "@/components/PokemonCard";
import {Pokemon, PokemonFull} from "@/types/types";

export async function generateStaticParams() {
    const pokemons = await makeRequest(GET_POKEMONS, pokemonsQuantity).then(res => res.data.pokemons)
    return pokemons.map((pokemon:Pokemon):{id:string} => ({
        id: pokemon.id,
    }))
}
const getPokemon = async (variables:{}) => {
    return await makeRequest(GET_POKEMON, variables)
}
export default async function Pokemon({params}: { params: { id: string } }) {
    const variables:{id:string} = {
        id: decodeURIComponent(params.id)
    }
    const pokemon:PokemonFull = await getPokemon(variables).then(res => res.data.pokemon)
    return (
        <main>
            <PokemonCard pokemon={pokemon}/>
        </main>
    )
}