import React from "react";
// import GoogleMaps from "simple-react-google-maps";
import {Map, Marker, GoogleApiWrapper} from "google-maps-react"

const Mapa = ({ google, locations = [] }) => {

    //Crear un useState, inicializamos con locations
  return (
    <Map
            google={google}
            containerStyle={{
                // position: "static",
                width: "100%",
                height: "100%"
            }}
            style={{
                width: "100%",
                height: "100%"
            }}
            center={locations[0]}
            initialCenter={locations[0]}
            zoom={locations.length === 1 ? 18 : 13}
            disableDefaultUI={true}
            onClick={(e,x,position)=>console.log(position.ib)} // Cuando pinchamos, tiene que agregar al useState que hemos agregado anteriormente el objeto {lat: position.ib.x, lng: location.ib.y}
        >
            {locations.map(
                (coords, index) => <Marker key={index} position={coords} />
            )}

        </Map>
    // <GoogleMaps
    //   apiKey={"AIzaSyBQlQuYNXFBVUscmVdChP41BeIy4A_q_Ms"}
    //   style={{ height: "100%", width: "100%" }}
    //   zoom={10}
    //   center={{ lat: 42.15223850198233, lng: -0.007682421714318551 }}
    //   markers={
    //     locations
    //     // [
    //     //   { lat: 42.12426288416609, lng: -0.06539160031352775 }, //optional 42.12426288416609, -0.06539160031352775
    //     //   { lat: 42.16462646659714, lng: -0.07810645938338229 },
    //     // ] //optional 42.16462646659714, -0.07810645938338229
    //   }
    // />
  );
};
// export default Mapa;
export default GoogleApiWrapper({
    apiKey: "AIzaSyBQlQuYNXFBVUscmVdChP41BeIy4A_q_Ms"
})(Mapa);

