import React, { useState, useContext } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';

const Map = (props) => {
  const { store, actions } = useContext(Context);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const [center, setCenter] = useState({
    lat: 42.15223850198233,
    lng: -0.007682421714318551,
  });

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
    props.setLat(event.latLng.lat())
    props.setLng(event.latLng.lng())
    setCenter({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    })
    // store.currentLocation[0] = event.latLng.lat();
    // store.currentLocation[1] = event.latLng.lng();
    // console.log(store.currentLocation);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBQlQuYNXFBVUscmVdChP41BeIy4A_q_Ms">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onClick={onMapClick}
      >
        {markerShown.isMarkerShown && (
          <Marker position={markerShown.markerPosition} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

Map.propTypes = {
  setLat: PropTypes.func,
  setLng: PropTypes.func
};

export default Map;