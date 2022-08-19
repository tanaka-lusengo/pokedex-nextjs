import axios from "axios";
import styles from "../../styles/components/Pokemon[name].module.scss";
import { GET_POKEMON } from "../api/api";

//-- fetching api data with getStaticPaths due to dynamic routing paths, to define a list of paths to
//-- be statically generated before getStaticProps.
export const getStaticPaths = async () => {
  try {
    const { data } = await axios.get(`${GET_POKEMON}?offset=0&limit=9`);
    const pokemonList = data.results;
    const paths = pokemonList.map((pokemon) => {
      return {
        params: { name: pokemon.name },
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
    const { data } = await axios.get(`${GET_POKEMON}/${name}`);

    return { props: { pokemon: data } };
  } catch (error) {
    console.log("getStaticProps error ->", error);
  }
};

const PokemonDetail = ({ pokemon }) => {
  return (
    <article>
      <h1>Pokémon Info</h1>
      <h2>{pokemon.name}</h2>
      <div>
        <img
          className={styles.pokeImage}
          src={pokemon.sprites.other.dream_world.front_default}
          alt="pokemon"
        />
      </div>
      <h3>Current Stats:</h3>
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
    </article>
  );
};

export default PokemonDetail;
