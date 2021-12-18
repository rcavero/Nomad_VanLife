import React from "react";
import GoogleMaps from "simple-react-google-maps";

const Map = ({ google, locations = [] }) => {
  return (
    <GoogleMaps
      apiKey={"AIzaSyBQlQuYNXFBVUscmVdChP41BeIy4A_q_Ms"}
      style={{ height: "100%", width: "100%" }}
      zoom={10}
      center={{ lat: 42.15223850198233, lng: -0.007682421714318551 }}
      markers={
        [
          { lat: 42.12426288416609, lng: -0.06539160031352775 }, //optional 42.12426288416609, -0.06539160031352775
          { lat: 42.16462646659714, lng: -0.07810645938338229 },
        ] //optional 42.16462646659714, -0.07810645938338229
      }
    />
  );
};
export default Map;
