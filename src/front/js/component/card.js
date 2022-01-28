import propTypes from "prop-types";
import React from "react";

export const Card = (props) => {
    return (
        <div className="container-fluid mt-3">
            <div className="card mb-3 col-lg-6 col-md-10 col-sm-12 m-auto">
                <img src={props.picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mb-3"><i class="fas fa-campground text-success"></i> {props.title}</h5>
                    <p className="card-text"><i class="fas fa-map-marker-alt text-danger"></i> {props.adress}</p>
                    <p className="card-text">Este es un lugar perfecto en medio del desierto en el que nadie te va a molestar y puedes pasar la noche tranquilamente. Espectaculares las vistas del amanecer mientras tomas un café.</p>
                    <div className="container-fluid d-flex justify-content-between ps-0 mb-3">
                        <div>
                            <h5 className="card-text text-primary">
                                <i class="fas fa-shower me-2"></i>
                                <i class="fas fa-laptop me-2"></i>
                                <i class="fas fa-gas-pump me-2"></i>
                                <i class="fas fa-bed"></i>
                            </h5>
                        </div>
                        <div>
                            <h5 className="card-text">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-secondary"></i>
                            </h5>
                        </div>
                    </div>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
    Card.propTypes = {
        title: propTypes.string,
        adress: propTypes.string,
        picture: propTypes.string,
    }
}