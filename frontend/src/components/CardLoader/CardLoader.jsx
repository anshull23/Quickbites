import "./CardLoader.css";

const CardLoader = () => {
  return (
    <div className="loader-card">
      <div className="loader-card-image"></div>
      <div className="loader-card-info">
        <div className="loader-card-name-rating">
          <div className="loader-card-line name"></div>
          <div className="loader-card-line rating"></div>
        </div>
        <div className="loader-card-line description"></div>
        <div className="loader-card-line description short"></div>
        <div className="loader-card-line price"></div>
      </div>
    </div>
  );
};

export default CardLoader;
