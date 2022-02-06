import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Map from "../component/map";

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
        <div className="card card-map-preview mb-3 min-vw-400 mh-200 col-xl-3 col-lg-4 col-md-5 col-sm-8 shadow border border-secondary position-absolute">
          <div className="row g-0">
            <div className="col-4 d-flex align-items-center">
              <img className="rounded-start" style={{ 'object-fit': 'cover', 'height': '100%', 'width': '100%' }} src="https://asa.com/wordpress/wp-content/uploads/2018/10/News-2018-10-Buying-First-Sailboat-Featured-1024x512.jpg" alt="..." />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title"><i class="fas fa-laptop-house text-success me-2"></i>Some place in Guara</h5>
                <p className="card-text text-primary mb-0">
                  <i className="fas fa-shower me-2"></i>
                  <i className="fas fa-laptop me-2"></i>
                  <i className="fas fa-gas-pump me-2"></i>
                  <i className="fas fa-bed"></i>
                </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
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
