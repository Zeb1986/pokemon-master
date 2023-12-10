import { makeRequest} from "@/helpers/requests";
import { GET_POKEMONS} from "@/helpers/querys";
import {Pokemon} from "@/types/types";
import PokemonsList from "@/components/PokemonsList";
import {Suspense} from "react";
import {Spin} from "antd";
const getPokemons = async () => {
  const variables = {
    first: 100
  };
  return await makeRequest(GET_POKEMONS, variables)
}
export default async function Home() {
  const pokemons:[Pokemon] = await getPokemons().then(res => res.data.pokemons)
  return (
      <main>
          <Suspense fallback={
              <Spin tip="Loading" size="large">
                  <div className="content"/>
              </Spin>}>
        <PokemonsList pokemons={pokemons}/>
              </Suspense>
      </main>
  )
}
