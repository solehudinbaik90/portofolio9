import Head from "next/head";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Preloader from "./components/common/preloader";
import usePageTransition from "./hooks/usePageTransition";

export default function App({ children, title }) {
  const isTransitioning = usePageTransition();

  return (
    <>
      <Head>
        <title>{title ? `${title} - Muhamad Soleh` : "Muhamad Soleh - Portfolio"}</title>
      </Head>
      <Preloader isTransitioning={isTransitioning} />
      <div className="container">
        <div className="cursor-follower" />
        <Header isTransitioning={isTransitioning} />
        <div className="wrapper">{children}</div>
        <Footer />
        <div className="lines">
          <div className="content">
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
          </div>
        </div>
      </div>
    </>
  );
}
