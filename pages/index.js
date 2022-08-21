import Head from "next/head";
import Link from "next/link";
import styles from "../styles/components/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokédex | Home</title>
        <meta name="description" content="pokemon" />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>Welcome!</h1>
        <h3 className={styles.text}>
          Shhhhh... This is a secret Next.js site where I keep all my captured
          Pokémon!
        </h3>
        <picture className={styles.imageContainer}>
          <img
            className={styles.pokeImage}
            src="/images/torchic.svg"
            alt="a pokemon torchic"
          />
        </picture>
        <h3 className={styles.title}>So... What is a Pokédex?</h3>
        <p className={styles.text}>
          The Pokédex (ポケモン 図鑑 ずかん , Pokemon Zukan, Illustrated Pokémon{" "}
          <br />
          Encyclopedia) is an electronic device created and designed to catalog{" "}
          <br />
          and provide information regarding the various species of Pokémon{" "}
          <br />
          featured in the Pokémon video game, anime and manga series.
        </p>
        <Link href="/pokemon">
          <a className={styles.btn}>See My Pokémon</a>
        </Link>
      </div>
    </>
  );
}
