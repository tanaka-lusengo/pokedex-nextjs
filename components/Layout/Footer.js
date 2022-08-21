import styles from "../../styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}> Copyright 2022 Tanaka&apos;s PokéDex</p>
        <picture>
          <img
            className={styles.img}
            src="/images/pokeball.svg"
            alt="red pokeball"
          />
        </picture>
      </div>
      <a
        className={styles.link}
        href="https://github.com/tanaka-lusengo/pokedex-nextjs"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
