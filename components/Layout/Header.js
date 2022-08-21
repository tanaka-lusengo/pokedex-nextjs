import Link from "next/link";
import styles from "../../styles/components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <h1>Tan&apos;s PokéDex</h1>
          <picture>
            <img
              className={styles.logoImage}
              src="/images/pokedex.png"
              alt="a red pokémon ball"
            />
          </picture>
        </div>
      </Link>
      <nav>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItemContainer}>
              <a className={styles.link}>Home</a>
            </li>
          </Link>
          <Link href="/pokemon">
            <li className={styles.listItemContainer}>
              <a className={styles.link}>Pokemon</a>
            </li>
          </Link>
          <Link href="/about">
            <li className={styles.listItemContainer}>
              <a className={styles.link}>About</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
