export type Pokemon = {
    classification:string
    id: string
    image:string
    name:string
}

export interface PokemonFull {
    id: string
    name: string
    weight: Weight
    height: Height
    classification: string
    types: string[]
    resistant: string[]
    attacks: Attacks
    fleeRate: number
    maxCP: number
    maxHP: number
    image: string
}

export interface Weight {
    minimum: string
    maximum: string
}

export interface Height {
    minimum: string
    maximum: string
}

export interface Attacks {
    fast: Fast[]
    special: Special[]
}

export interface Fast {
    name: string
    type: string
    damage: number
}

export interface Special {
    name: string
    type: string
    damage: number
}