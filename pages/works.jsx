import dynamic from "next/dynamic";
import Title from "../src/components/common/title";

const PortfolioItems = dynamic(() => import("../src/components/works/portfolioitems"), {
  ssr: false,
});

export default function Works() {
  return (
    <>
      <Title variant="creative" pageName="proyek" extraClass="typed-subtitle" />
      <div className="section works" id="section-portfolio">
        <div className="content">
          <PortfolioItems />
          <div className="clear" />
        </div>
      </div>
    </>
  );
}

Works.pageTitle = "Proyek";
