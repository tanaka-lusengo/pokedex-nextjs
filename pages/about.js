import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>Pokédex | About</title>
        <meta name="description" content="about" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
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
