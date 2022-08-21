import Head from "next/head";
import axios from "axios";
import { GET_POKEMON } from "../api/api";
import PokemonCard from "../../components/PokemonCard";

//-- fetching api data with getStaticProps...
//-- If you export a function called getStaticProps (Static Site Generation)
//-- from a page, Next.js will pre-render this page at build time using the
//-- props returned by getStaticProps.
export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(`${GET_POKEMON}?offset=0&limit=9`);

    //-- Passed to the page component as props
    const pokemon = {
      props: {
        pokemon: data,
      },
    };
    return pokemon;
  } catch (error) {
    console.log("getStaticProps error ->", error);
  }
};

const pokemon = ({ pokemon }) => {
  const allPokemon = pokemon.results;
  return (
    <>
      <Head>
        <title>Pokédex | Pokémon Inventory</title>
        <meta name="description" content="pokemon inventory" />
      </Head>
      <div>
        <h1>My Captured Pokemon!</h1>
        {allPokemon.map((pokemon, i) => {
          return <PokemonCard pokemon={pokemon} key={i} />;
        })}
      </div>
    </>
  );
};

export default pokemon;
