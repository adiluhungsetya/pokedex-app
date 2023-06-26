export type Pokemon = {
    id: number,
    paddedId: string,
    name: string,
    imgSrc: string,
    weight: string,
    height: string,
    types: Base[],
    stats: Stat[],
    species: Base,
    abilities: Ability[],

}

export type PokemonResponse = {
    id: number,
    name: string,
    sprites: Sprites,
    weight: number,
    height: number,
    types: Type[],
    stats: Stat[],
    species: Base,
    abilities: {
        ability: Base,
        is_hidden: boolean,
        slot: number,
    }[],
    //unnecessary field
    base_experience: number,
    forms: any[],
    game_indices: any[],
    held_items: any[],
    is_default: boolean,
    location_area_encounters: string,
    moves: any[],
    order: number,
    past_types: any[],
}

export type Sprites = {
    other : {
        dream_world: {
            front_default: string | null,
            front_female: string | null,
        },
        home: {
            front_default: string | null,
            front_female: string | null,
            front_shiny: string | null,
            front_shiny_female: string | null,
        },
        'official-artwork': {
            front_default: string | null,
            front_shiny: string | null,
        }
    },
    //unnecessary field
    back_default:any,
    back_female:any,
    back_shiny:any,
    back_shiny_female:any,
    front_default:any,
    front_female:any,
    front_shiny:any,
    front_shiny_female:any,
    versions: any[],
}

export type Type = {
    slot: number,
    type: Base
}

export type BasePokemon = {
    pokemon : Base,
    slot: number,
}

export type Base = {
    name: string,
    url: string,
}

export type Stat = {
    base_stat: number, 
    effort: number,
    stat: Base,
}

export type Ability = {
    ability: Base,
    is_hidden: boolean,
    slot: number,
}

export type StatFilter = { 
    name: string,
    value: number,
    max?: number,
}

export type EvolutionChain = {
    evolution_details: any[],
    evolves_to: EvolutionChain[],
    species: Base,
    is_baby: boolean,
}

export type Evolution = {
    current: Base,
    next: Base,
}

export type ContextModal = {
    currentPokemon: Partial<Pokemon>,
    openModal: (p : Pokemon) => void,
    isModalOpen: boolean,
    closeModal: () => void,
}

export type DefaultResponse = {
    count: number,
    next: string,
    previous: string,
    results: Base[],
}