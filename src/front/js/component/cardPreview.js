import React, { useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/home.css";

// import {kindOfPlace} from "./card.js"

export const CardPreview = (props) => {
    const kinfOfPlace = (i) => {
        let place = ""
        if (i == 0) {
            place = "fas fa-campground text-success me-2"
        } else if (i == 1) {
            place = "fas fa-caravan text-success me-2"
        } else if (i == 2) {
            place = "fas fa-laptop-house text-success me-2"
        } else {
            place = "fas fa-question text-success me-2"
        }
        return place
    }

    const showService = (n) => {
        let show = ""
        if (props.services[n] === 0) {
            show = "collapse"
        }
        return show
    }

    const rateStar = (pos, rate) => {
        let light = ""
        let stars = [0, 0, 0, 0, 0]
        if (pos <= rate - 1) {
            light = "fas fa-star text-warning"
        } else {
            light = "fas fa-star text-secondary"
        }
        return light
    }
    return (
        <div className="card card-map-preview mb-3 min-vw-400 mh-200 col-xl-3 col-lg-4 col-md-5 col-sm-8 shadow border border-secondary position-absolute">
            <div className="row g-0">
                <div className="col-4 d-flex align-items-center">
                    <img className="rounded-start" style={{ 'objectFit': 'cover', 'height': '100%', 'width': '100%' }} src={props.picture} alt="..." />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title"><i className={kinfOfPlace(props.kindPlace)}></i>{props.title}</h5>
                        <p className="card-text text-primary mb-0">
                            <span className={showService(0)}><i className="fas fa-shower me-2"></i></span>
                            <span className={showService(1)}><i className="fas fa-laptop me-2"></i></span>
                            <span className={showService(2)}><i className="fas fa-gas-pump me-2"></i></span>
                            <span className={showService(3)}><i className="fas fa-bed"></i></span>
                        </p>
                        <h5 className="card-text mt-2">
                        <i className={rateStar(0, props.rate)}></i>
                            <i className={rateStar(1, props.rate)}></i>
                            <i className={rateStar(2, props.rate)}></i>
                            <i className={rateStar(3, props.rate)}></i>
                            <i className={rateStar(4, props.rate)}></i>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )

    CardPreview.propTypes = {
        title: propTypes.string,
        picture: propTypes.string,
        services: propTypes.array,
        rate: propTypes.number,
        kindPlace: propTypes.number,
    }
}