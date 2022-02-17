import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { CardPreview } from "./cardPreview";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const center = {
    lat: 42.15223850198233,
    lng: -0.007682421714318551,
  };

  const [showInfo, setShowInfo] = useState({ show: false, id: null });

  const onToggleOpen = (id) => {
    setShowInfo({ id: id, show: !showInfo.show });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBQlQuYNXFBVUscmVdChP41BeIy4A_q_Ms">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker
          position={{ lat: 42.12426288416609, lng: -0.06539160031352775 }}
          onClick={() => {
            onToggleOpen(1);
          }}
        >
          {showInfo.show && showInfo.id == 1 && (
            <InfoWindow onCloseClick={onToggleOpen}>
              <CardPreview
                title="Some place in Guara"
                kindPlace={2}
                services={[1, 1, 1, 1]}
                rate={4}
                picture="https://asa.com/wordpress/wp-content/uploads/2018/10/News-2018-10-Buying-First-Sailboat-Featured-1024x512.jpg"
              />
            </InfoWindow>
          )}
        </Marker>
        <Marker
          title={"afdsadfas"}
          position={{ lat: 42.16462646659714, lng: -0.07810645938338229 }}
          onClick={() => {
            onToggleOpen(2);
          }}
        >
          {showInfo.show && showInfo.id == 2 && (
            <InfoWindow onCloseClick={onToggleOpen}>
              <div>{"Informacion del punto"}</div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;