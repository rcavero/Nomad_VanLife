import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { CardPreview } from "./cardPreview";

const Map = () => {
  // const [nomadVanPlaceList, setNomadVanPlaceList] = useState([])

  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getNomadVanPlaceList().then(response => {
      // console.log(response)
      // setNomadVanPlaceList(response)
    })
  }, []);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const [center, setCenter] = useState({
    lat: 42.15223850198233,
    lng: -0.007682421714318551,
  });

  const [showInfo, setShowInfo] = useState({ show: false, id: null });

  const onToggleOpen = (id) => {
    setShowInfo({ id: id, show: true });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBQlQuYNXFBVUscmVdChP41BeIy4A_q_Ms">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Marker1 ------------------------------------------------------------------------------ */}
        {/* <Marker
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
        </Marker> */}
        {/* Marker2 ------------------------------------------------------------------------------ */}
        {/* <Marker
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
        </Marker> */}
        {/* Marker Generic for showing all -------------------------------------------------------- */}
        {store.nomadVanPlaceList.map((value, index) => {
          return (
            <div className="container-fluid mx-0 px-0 mt-3" key={index}>
              <Marker
                title={value.title}
                position={{ lat: value.location.lat, lng: value.location.lng }}
                onClick={() => {
                  onToggleOpen(index);
                  setCenter({ lat: value.location.lat, lng: value.location.lng })
                }}
              >
                {showInfo.show && showInfo.id == index && (
                  <InfoWindow onCloseClick={onToggleOpen}>
                    <div>
                    <p className="fw-bold m-0 p-0 mb-1 fs-6">{value.title}</p>
                      <p className="fw-bold m-0 p-0 mb-1 fs-5"><i className={value.kind_of_place.icon}></i></p>
                      <p className="fw-bold m-0 p-0 mb-1 text-primary">
                      {value.services.map((val,ind) => {
                        return(
                          <i className={val.icon} key={ind}></i>
                        )
                      })}
                      </p>
                      <p className="m-0 p-0"><Link to={`/cards/${value.id}`}>Show + info</Link></p>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
              {/* <Card title={value.title} adress={`lat: ${value.location.lat} lng: ${value.location}`} picture={value.image} description={value.description} services={value.services} rate={value.rating} kindPlace={value.kind_of_place.icon} date={value.date} /> */}
            </div>
          )
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;