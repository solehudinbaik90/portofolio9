import Head from "next/head";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Preloader from "./components/common/preloader";

export default function App({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Muhamad Soleh` : "Muhamad Soleh - Portofolio"}</title>
      </Head>
      <Preloader />
      <div className="container">
        <div className="cursor-follower" />
        <Header />
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
