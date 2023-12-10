'use client'
import {Button, Card, Flex, FloatButton} from "antd";
import Image from "next/image";
import {PokemonFull} from "@/types/types";
import Link from "next/link";

interface PokemonCardProps {
    pokemon: PokemonFull
}

const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {
    return (
        <div>
            <Flex align="center" gap={"small"} vertical>
                <Link href="/">
                    <Button block style={{width: 600}}>Back to pokemons</Button>
                </Link>
                <Card
                    key={pokemon.id}
                    bodyStyle={{backgroundColor: "lavender"}}
                    style={{width: 600}}
                    cover={<Image priority={true} alt="picature of pokemon" src={pokemon.image} width={600}
                                  height={600}/>}
                >
                    <h1>This is {pokemon.name}</h1>
                    <h2>From {pokemon.classification}s</h2>
                    <p>His weight is from {pokemon.weight.minimum} to {pokemon.weight.maximum}</p>
                    <p>His height is from {pokemon.height.minimum} to {pokemon.height.maximum}</p>
                    <p>He is type of: {pokemon.types.map((item, i) => i === 0 ? <span key={i}>{item}</span> :
                        <span key={i}>, {item}</span>)}</p>
                    <p>He is resistant to:{pokemon.resistant.map((item, i) => <span
                        key={i}>{i === 0 ? '' : ','}&nbsp;{item}</span>)}</p>
                    <p>His fast attacks is:{pokemon.attacks.fast.map((attack, i) =>
                        <span
                            key={i}>{i === 0 ? '' : ','}&nbsp;{attack.name}, type: {attack.type}, damage: {attack.damage}</span>)}</p>
                    <p>Flee rate is: {pokemon.fleeRate}</p>
                    <p>His maxCP is: {pokemon.maxCP}</p>
                    <p>His maxHP is: {pokemon.maxHP}</p>
                </Card>
            </Flex>
            <FloatButton.BackTop visibilityHeight={10}/>
        </div>

    )
}
export default PokemonCard