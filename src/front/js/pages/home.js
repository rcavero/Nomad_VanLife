import React, { useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardPreview } from "../component/cardPreview";
import Map from "../component/map";
// Aquí puedo cambiar el componente de mapa que se muestra 

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid text-center m-0 p-0">
      {/* ------------------------------------------------------------------------------ */}
      <div
        className="container-fluid p-0"
        style={{ width: "100%", height: "90vh" }}
      >
        <CardPreview title="Some place in Guara" kindPlace={2} services={[1, 1, 1, 1]} rate={4} picture="https://asa.com/wordpress/wp-content/uploads/2018/10/News-2018-10-Buying-First-Sailboat-Featured-1024x512.jpg"/>
        <Map />
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
