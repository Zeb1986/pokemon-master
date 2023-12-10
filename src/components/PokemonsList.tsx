'use client'
import {ChangeEvent, useState} from "react";
import {Card, Divider, Flex, Pagination, Select, Typography} from "antd";
import type {SelectProps} from 'antd';
import {Pokemon} from "@/types/types";
import Image from "next/image";
import Link from 'next/link'
import Search from "antd/es/input/Search";

interface PokemonsListProps {
    pokemons: Pokemon[];
}

const PokemonsList = ({pokemons = []}: PokemonsListProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [classes, setClasses] = useState<string[]>([]);
    const [nameSearch, setNameSearch] = useState<string>('');
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const {Title} = Typography;
    const options: SelectProps['options'] = []
    //Creating pokemons class options for filtering
    new Set(pokemons.map((pokemon: Pokemon) => pokemon.classification))
        .forEach(value => options.push({
            label: value,
            value,
        }))
    const pokemonsToMap = pokemons.filter(value => value.name.toLowerCase().includes(nameSearch)).filter(value => {
        if (classes.length) {
            return classes.includes(value.classification)
        } else return true
    })
    return (
        <>
            <Flex vertical align="center">
                <Title level={4}>Search Pokemon By Name</Title>
                <Search
                    placeholder="Search Pokemon By Name"
                    value={nameSearch}
                    allowClear
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNameSearch(e.target.value.trim().toLowerCase())}
                    style={{width: 300}}/>
                <Title level={4}>Select Pokemon&apos;s Classes</Title>
                <Select
                    mode="multiple"
                    style={{minWidth: 300}}
                    placeholder="Select Pokemons Classes"
                    allowClear
                    onChange={value => setClasses(value)}
                    options={options}
                />
            </Flex>
            <Divider orientation="center">Pokemon&apos;s</Divider>
            <Flex wrap="wrap" gap="large" justify="center">
                {pokemons && pokemonsToMap
                    //cut pokemons for pages
                    .slice(startIndex, endIndex)
                    .map((pokemon: Pokemon) => {
                        const {Meta} = Card;
                        return (
                            <Link key={pokemon.id} href={`/pokemons/${pokemon.id}`}>
                                <Card
                                    key={pokemon.id}
                                    bodyStyle={{backgroundColor: "lavender"}}
                                    hoverable
                                    style={{width: 300}}
                                    cover={<Image
                                        priority={true}
                                        alt="picature of pokemon"
                                        src={pokemon.image}
                                        width={300}
                                        height={300}/>}
                                >
                                    <Meta title={pokemon.name} description={pokemon.classification}/>
                                </Card>
                            </Link>

                        )
                    })}
            </Flex>
            <Divider/>
            <Flex justify="center">
                <Pagination
                    current={currentPage}
                    showSizeChanger={false}
                    onChange={(page) => setCurrentPage(page)}
                    total={pokemonsToMap.length}/>
            </Flex></>
    )
}

export default PokemonsList