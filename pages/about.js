import Head from "next/head";
import styles from "../styles/components/About.module.scss";

const about = () => {
  return (
    <>
      <Head>
        <title>Pokédex | About</title>
        <meta name="description" content="about" />
      </Head>
      <div className={styles.about}>
        <h1>About</h1>
        <img
          className={styles.pokeImage}
          src="/images/squirtle.svg"
          alt="pokemon squirtle"
        />
        <p className={styles.text}>
          Pokémon is a Japanese media franchise managed by The Pokémon Company,
          a <br />
          company founded by Nintendo, Game Freak, and Creatures. The franchise{" "}
          <br />
          was created by Satoshi Tajiri in 1996, and is centered on fictional{" "}
          <br />
          creatures called "Pokémon".
        </p>
      </div>
    </>
  );
};

export default about;
