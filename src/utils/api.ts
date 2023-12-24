import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const POKEMONS_URL = BASE_URL + '/pokemon';

export type SimplePokemonType = {
  name: string;
  url: string;
};

export type SimplePokemonsType = Array<SimplePokemonsType> | undefined;

type PokemonsResponseType =
  | {
      results: SimplePokemonsType[];
      next: string;
      previous: string;
      count: number;
    }
  | undefined;

export const getPokemons = async () => {
  try {
    return axios.get<PokemonsResponseType>(POKEMONS_URL);
  } catch (error) {
    console.error(error);
  }
};
