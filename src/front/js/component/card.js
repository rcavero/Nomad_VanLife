import propTypes from "prop-types";
import React from "react";
import "../../styles/card.css";

export const Card = (props) => {

    const kinfOfPlace = (i) => {
        let place = ""
        if (i==0){
            place = "fas fa-campground text-success"
        }else if (i==1){
            place = "fas fa-caravan text-success"
        }else if (i==2){
            place = "fas fa-laptop-house text-success"
        }else{
            place = "fas fa-question text-success"
        }
        return place
    }
    
    const showService = (n) => {
        let show=""
        if (props.services[n] === 0){
            show="collapse"
        }
        return show
    }

    const rateStar = (pos,rate) => {
        let light=""
        let stars=[0,0,0,0,0]
        if (pos<=rate-1){
            light="fas fa-star text-warning"
        }else{
            light="fas fa-star text-secondary"
        }
        return light
    }

    return (
        <div className="container-fluid pt-0">
            {/* <div className="card mb-3 col-lg-3 col-md-10 col-sm-12 col-xs-12 m-auto bg-light shadow border border-secondary"> */}
            <div className="card mb-3 m-auto bg-light h-100 shadow border border-secondary">
                <img src={props.picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title mb-3"><i class={kinfOfPlace(props.kindPlace)}></i> {props.title}</h4>
                    <p className="card-text"><i class="fas fa-map-marker-alt text-danger"></i> {props.adress}</p>
                    <p className="card-text">{props.description}</p>
                    <div className="container-fluid d-flex justify-content-between ps-0 mb-3">
                        <div>
                            <h5 className="card-text text-primary">
                                <span className={showService(0)}><i class="fas fa-shower me-2"></i></span>
                                <span className={showService(1)}><i class="fas fa-laptop me-2"></i></span>
                                <span className={showService(2)}><i class="fas fa-gas-pump me-2"></i></span>
                                <span className={showService(3)}><i class="fas fa-bed"></i></span>
                            </h5>
                        </div>
                        <div>
                            <h5 className="card-text">
                            <i class={rateStar(0, props.rate)}></i>
                            <i class={rateStar(1, props.rate)}></i>
                            <i class={rateStar(2, props.rate)}></i>
                            <i class={rateStar(3, props.rate)}></i>
                            <i class={rateStar(4, props.rate)}></i>
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
        description: propTypes.string,
        services: propTypes.array,
        rate: propTypes.number,
        kindPlace: propTypes.number,
    }
}