import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  const reRouteHome = () => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  useEffect(() => {
    reRouteHome();
  });

  return (
    <>
      <Head>
        <title>Pokédex | 404</title>
        <meta name="description" content="page not found" />
      </Head>
      <div className="not-found">
        <h1>Oooops...</h1>
        <h2>This page cannot be found</h2>
        <picture>
          <img
            className="not-found__image"
            src="/images/pikachu.svg"
            alt="pokemon pikachu"
          />
        </picture>
        <p>
          Go back to{" "}
          <Link href="/">
            <a className="not-found__home-btn">Homapage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
