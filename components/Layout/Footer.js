import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text"> Copyright 2022 Tanaka&apos;s PokéDex</p>
      <img
        className="footer__img"
        src="/images/pokeball.svg"
        alt="red pokeball"
      />
    </footer>
  );
};

export default Footer;
