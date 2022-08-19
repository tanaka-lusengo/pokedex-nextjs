import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/navigation/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1>PokéDex</h1>
        <img
          className={styles.logoImage}
          src="/images/pokedex.png"
          alt="a red pokémon ball"
        />
      </div>
      <nav>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItemContainer}>
              <a>Home</a>
            </li>
          </Link>
          <Link href="/pokemon">
            <li className={styles.listItemContainer}>
              <a>Pokemon</a>
            </li>
          </Link>
          <Link href="about">
            <li className={styles.listItemContainer}>
              <a>About</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
