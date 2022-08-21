import Link from "next/link";
import styles from "../../styles/components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <h1>Tan's PokéDex</h1>
          <img
            className={styles.logoImage}
            src="/images/pokedex.png"
            alt="a red pokémon ball"
          />
        </div>
      </Link>
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
          <Link href="/about">
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
