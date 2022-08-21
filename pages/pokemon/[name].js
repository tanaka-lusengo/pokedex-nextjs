import Head from "next/head";
import axios from "axios";
import styles from "../../styles/components/Pokemon[name].module.scss";
import { GET_POKEMON, GET_POKEMON_DESCRIPTION } from "../api/api";

//-- fetching api data with getStaticPaths due to dynamic routing paths, to define a list of paths to
//-- be statically generated before getStaticProps.
export const getStaticPaths = async () => {
  try {
    const { data } = await axios.get(`${GET_POKEMON}?offset=0&limit=9`);
    const pokemonList = data.results;
    const paths = pokemonList.map((pokemon) => {
      return {
        params: {
          name: pokemon.name,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log("getStaticPaths error ->", error);
  }
};

//-- now that dynamic paths are defined we can fetch api data with getStaticProps
export const getStaticProps = async (context) => {
  const name = context.params.name;
  try {
    const response1 = await axios.get(`${GET_POKEMON}/${name}`);
    const response2 = await axios.get(
      `${GET_POKEMON_DESCRIPTION}/${response1.data.id}`
    );

    return {
      props: {
        pokemon: response1.data,
        characteristic: response2.data,
      },
    };
  } catch (error) {
    console.log("getStaticProps error ->", error);
  }
};

const PokemonDetail = ({ pokemon, characteristic }) => {
  return (
    <>
      <Head>
        <title>Pokédex | Pokémon {pokemon.name}</title>
        <meta name="description" content="pokemon inventory" />
      </Head>
      <h1>Pokémon Info</h1>
      <article className={styles.articleContainer}>
        <div>
          <h2>{pokemon.name}</h2>
          <picture>
            <img
              className={styles.pokeImage}
              src={pokemon.sprites.other.dream_world.front_default}
              alt="pokemon"
            />
          </picture>
        </div>

        <div>
          <h3>Description:</h3>
          <ul>
            <li>
              {characteristic.descriptions.slice(7, 8).map((item) => {
                return item.description;
              })}
            </li>
          </ul>
          <h3>Stats:</h3>
          <ul>
            <li>
              Type:{" "}
              {pokemon.types.slice(0, 1).map((stats) => {
                return stats.type.name;
              })}
            </li>
            <li>Height: {pokemon.height}</li>
            <li>Weight: {pokemon.weight}</li>
            <li>
              Moves:{" "}
              {pokemon.moves.slice(0, 4).map((stats) => {
                return `${stats.move.name} | `;
              })}
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default PokemonDetail;
