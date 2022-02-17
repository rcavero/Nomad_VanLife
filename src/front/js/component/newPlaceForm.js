import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

export const NewPlaceForm = () => {
    return (
        <div className="container-fluid mt-3 mb-0 d-grid justify-content-start pe-2">
            <button type="button" className="btn btn-primary right-button border border-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal1"><i class="fas fa-plus pe-2"></i>New NomadVanPlace</button>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New NomadVanPlace</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* ------------------------------ */}
                            {/* <hr class="border-2 border-top border-secondary"></hr> */}
                            <div class="row g-2 align-items-center mb-2">
                                <div class="col-2">
                                    <label for="titleNewPlace" className="col-form-label">Title</label>
                                </div>
                                <div class="col-10">
                                    <input id="titleNewPlace" className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div class="row g-2 align-items-center mb-2">
                                <div class="col-2">
                                    <label for="pictureNewPlace" className="col-form-label">Picture</label>
                                </div>
                                <div class="col-10">
                                    <input id="pictureNewPlace" className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div class="row g-2 align-items-center mb-2">
                                <div class="col-2">
                                    <label for="locationNewPlace" className="col-form-label">Location</label>
                                </div>
                                <div class="col-10">
                                    <input id="locationNewPlace" className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                            <div class="row g-2 align-items-center mb-2">
                                <div className="col-3">
                                    <label for="selectKindPlace" className="col-form-label">Kind of Place</label>
                                </div>
                                <div className=" col-9">
                                    <select id="selectKindPlace" className="form-select">
                                        <option>Camping</option>
                                        <option>Van Place</option>
                                        <option>Nomad Work</option>
                                        <option>Unknown</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row g-3 align-items-center mb-2">
                                <div className="col-3">
                                    <label for="selectServices" className="col-form-label">Services</label>
                                </div>
                                <div className=" col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            <p className="fw-bold m-0 p-0"><i className="fas fa-shower text-primary me-2"></i>Shower</p>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            <p className="fw-bold m-0 p-0"><i className="fas fa-laptop text-primary me-2"></i>Wi-fi</p>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            <p className="fw-bold m-0 p-0"><i className="fas fa-gas-pump text-primary me-2"></i>Gas</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            <p className="fw-bold m-0 p-0"><i className="fas fa-bed text-primary me-2"></i>Beds</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <select id="Select" className="form-select">
                                    <option>Disabled select</option>
                                </select>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    <h5 className="card-text">
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-secondary"></i>
                                    </h5>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    <h5 className="card-text">
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                        <i class="fas fa-star text-warning"></i>
                                    </h5>
                                </label>
                            </div>
                            {/* ------------------------------ */}
                            <h5 className="mt-4 p-0">Kind of Place</h5>
                            <hr className="border-2 border-top border-secondary"></hr>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    <p className="fw-bold m-0 p-0"><i className="fas fa-campground text-success me-2"></i>Camping</p>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    <p className="fw-bold m-0 p-0"><i className="fas fa-caravan text-success me-2"></i>Van Parking</p>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    <p className="fw-bold m-0 p-0"><i className="fas fa-laptop-house text-success me-2"></i>Nomad Work</p>
                                </label>
                            </div>
                            {/* ------------------------------ */}
                            <h5 className="mt-4 p-0">Services</h5>
                            <hr className="border-2 border-top border-secondary"></hr>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    <p className="fw-bold m-0 p-0"><i className="fas fa-shower text-primary me-2"></i>Shower</p>
                                </label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    <p className="fw-bold m-0 p-0"><i className="fas fa-laptop text-primary me-2"></i>Wi-fi</p>
                                </label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    <p className="fw-bold m-0 p-0"><i className="fas fa-gas-pump text-primary me-2"></i>Gas</p>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" for="flexCheckChecked">
                                    <p className="fw-bold m-0 p-0"><i className="fas fa-bed text-primary me-2"></i>Beds</p>
                                </label>
                            </div>
                            {/* ------------------------------ */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Apply Filters</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}