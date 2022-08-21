import Link from "next/link";
import styles from "../styles/components/PokemonCard.module.scss";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <article className={styles.detailContainer}>
        <h3 className={styles.name}>{pokemon.name}</h3>
        <img
          className={styles.pokeball}
          src="/images/pokeball.svg"
          alt="red pokeball"
        />
      </article>
    </Link>
  );
};

export default PokemonCard;
