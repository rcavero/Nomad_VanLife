import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import GoogleApiWrapper from "../component/mapa";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid text-center m-0 p-0">
      {/* ------------------------------------------------------------------------------ */}
      <div
        className="container-fluid p-0"
        style={{ width: "100%", height: "90vh" }}
      >
        {/* <button className="rounded-button-left">
          <ion-icon name="map-outline"></ion-icon>
        </button>
        <button className="rounded-button-right">
          <ion-icon name="map-outline"></ion-icon>
        </button> */}
        <GoogleApiWrapper locations={[
          { lat: 42.12426288416609, lng: -0.06539160031352775 },
          { lat: 42.16462646659714, lng: -0.07810645938338229 }, //Aquí tendré que añadir las localizaciones desde mi base de datos
        ]}/>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
          Read documentation
        </a>
      </p>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};
