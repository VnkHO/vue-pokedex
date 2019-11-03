
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: [];
  forms: [];
  game_indices: [];
  held_items: [];
  location_area_encounters: string;
  moves: [];
  sprites: {};
  species: {};
  stats: [];
  types: [];
}

export interface PokemonState {
  pokemons: [];
  searchWord: string;
  filteredCourses: null;
}

export interface PokemonActions {

}

export interface PokemonGetters {

}

export interface PokemonMutations {

}