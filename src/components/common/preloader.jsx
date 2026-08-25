export default function Preloader({ isTransitioning }) {
  return (
    <div className="preloader" style={{ display: isTransitioning ? "block" : "none" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div>
      </div>
    </div>
  );
}
