import "./mapPage.css";
import VIDAmap from "../img/VIDAmap.png";

interface MapPageProps {
  activePage: string;
  language: string;
}

const MapPage: React.FC<MapPageProps> = (props) => {
  return (
    <div
      className={
        props.activePage === "map" ? "map_window" : "map_window map_hide"
      }
    >
      <div className="map_background">
        <div className="map_content">
          <img
            className="vida_map"
            src={VIDAmap}
            alt=""
          />
        </div>
        <div className="map-active_background"></div>
      </div>
    </div>
  );
};

export default MapPage;
