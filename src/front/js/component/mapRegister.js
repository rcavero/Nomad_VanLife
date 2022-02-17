import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const center = {
    lat: 42.15223850198233,
    lng: -0.007682421714318551,
  };

  const [markerShown, setMarkerShown] = useState({
    isMarkerShown: false,
    markerPosition: null,
  });

  const onMapClick = (event) => {
    setMarkerShown({
      markerPosition: event.latLng,
      isMarkerShown: true,
    });
    // llamar al api que necesites para  optner la direccion por medio de su lat y lng
    // ejemplo https://www.npmjs.com/package/react-geocode
    // confirmar si este servicio de google es pago
    console.log(event.latLng.lat(), event.latLng.lng());
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBQlQuYNXFBVUscmVdChP41BeIy4A_q_Ms">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={onMapClick}
      >
        {markerShown.isMarkerShown && (
          <Marker position={markerShown.markerPosition} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;