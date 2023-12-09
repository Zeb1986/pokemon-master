'use client'
import Image from 'next/image'
import { useEffect, useState } from "react";
// import styles from './page.module.css'
import { Divider, Card, Flex, Pagination } from 'antd';
import {Pokemon} from "@/types/types";


const url = 'https://graphql-pokemon2.vercel.app'
const query = `query getPokemons($first: Int!) {
  pokemons(first: $first) {
    id
    name
    classification
    image
  }
}`
export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const makeRequest = (query:string, variables: any) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ query, variables })
    }).then(res => res.json())
  }

  const variables = {
    first: 30
  };

  useEffect(() => {
    makeRequest(query, variables).then(res => setPokemons(res.data.pokemons))
  },[])

  return (
    <main
        // className={styles.main}
    >
        <Divider orientation="center">Pokemon's</Divider>
      <Flex wrap="wrap" gap="large" justify="center">
            {pokemons.map((pokemon:Pokemon) => {
              const { Meta } = Card;
                return (
                        <Card
                            bodyStyle={{backgroundColor: "lavender"}}
                            hoverable
                            style={{ width: 300 }}
                            cover={<Image alt="picature of pokemon" src={pokemon.image} width={300} height={300} />}
                        >
                          <Meta title={pokemon.name} description={pokemon.classification} />
                        </Card>
                )
            })}
      </Flex>
      <Divider/>
      <Flex justify="center">
        <Pagination defaultCurrent={1} total={pokemons.length} />
      </Flex>
    </main>
  )
}
