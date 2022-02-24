import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const NewPlaceForm = () => {
    const { store, actions } = useContext(Context);
    const [title, setTitle] = useState("Title");
    const [picture, setPicture] = useState("https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.jpg");
    const [lat, setLat] = useState(42.15223850198233);
    const [lng, setLng] = useState(-0.007682421714318551);
    const [kindOfPlace, setKindOfPlace] = useState(1);
    const [services, setServices] = useState([]);
    const [description, setDescription] = useState("Some description");
    const [rating, setRating] = useState(3);
    // const token = sessionStorage.getItem("token");
    // const history = useHistory();

    const handleClick = () => {
        actions.createNomadVanPlace(title, picture, [lat,lng], kindOfPlace, services, description, rating);
    }

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
                                    <input id="titleNewPlace" className="form-control" aria-describedby="passwordHelpInline" value={title} onChange={(event) => setTitle(event.target.value)}/>
                                </div>
                            </div>
                            <div class="row g-2 align-items-center mb-2">
                                <div class="col-2">
                                    <label for="pictureNewPlace" className="col-form-label">Picture</label>
                                </div>
                                <div class="col-10">
                                    <input id="pictureNewPlace" className="form-control" aria-describedby="passwordHelpInline" value={picture} onChange={(event) => setPicture(event.target.value)}/>
                                </div>
                            </div>
                            <div class="row g-2 align-items-center mb-2">
                                <div class="col-2">
                                    <label for="locationNewPlace" className="col-form-label">Location</label>
                                </div>
                                <div class="col-5">
                                    <input id="locationNewPlace" className="form-control" placeholder="lat" aria-describedby="passwordHelpInline" value={lat} onChange={(event) => setLat(event.target.value)}/>
                                </div>
                                <div class="col-5">
                                    <input id="locationNewPlace" className="form-control" placeholder="long" aria-describedby="passwordHelpInline" value={lng} onChange={(event) => setLng(event.target.value)}/>
                                </div>
                            </div>
                            <div class="row g-2 align-items-center mb-2">
                                <div className="col-3">
                                    <label for="selectKindPlace" className="col-form-label">Kind of Place</label>
                                </div>
                                <div className=" col-9">
                                    <select id="selectKindPlace" className="form-select" value={kindOfPlace} onChange={(event) => setKindOfPlace(event.target.value)}>
                                        {/* <option>Select a kind of place</option> */}
                                        <option value="1">Camping</option>
                                        <option value="2">Van Place</option>
                                        <option value="3">Nomad Work</option>
                                        <option value="4">Unknown</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row g-3 align-items-center mb-2">
                                <div className="col-3">
                                    <label for="selectServices" className="col-form-label">Services</label>
                                </div>
                                <div className=" col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="1" id="flexCheckDefault" onClick={()=>setServices([...services, 1])} />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            <p className="fw-bold m-0 p-0"><i className="fas fa-shower text-primary me-2"></i>Shower</p>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={()=>setServices([...services, 2])}/>
                                        <label className="form-check-label" for="flexCheckChecked">
                                            <p className="fw-bold m-0 p-0"><i className="fas fa-laptop text-primary me-2"></i>Wi-fi</p>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={()=>setServices([...services, 3])}/>
                                        <label className="form-check-label" for="flexCheckChecked">
                                            <p className="fw-bold m-0 p-0"><i className="fas fa-gas-pump text-primary me-2"></i>Gas</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={()=>setServices([...services, 4])}/>
                                        <label className="form-check-label" for="flexCheckChecked">
                                            <p className="fw-bold m-0 p-0"><i className="fas fa-bed text-primary me-2"></i>Beds</p>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row g-2 align-items-center mb-2">
                                <div class="col-3">
                                    <label for="descriptionNewPlace" className="col-form-label">Description</label>
                                </div>
                                <div class="col-9">
                                    <textarea id="descriptionNewPlace" className="form-control" aria-describedby="passwordHelpInline" value={description} onChange={(event) => setDescription(event.target.value)}/>
                                </div>
                            </div>

                            <div class="row g-3 align-items-center mb-2">
                                <div className="col-3">
                                    <label for="selectRate" className="col-form-label">Rating</label>
                                </div>
                                <div className=" col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioRating" value="0" id="flexCheckChecked" onClick={()=>setRating(0)}/>
                                        <label className="form-check-label" for="flexCheckChecked">
                                            <h5 className="card-text">
                                                <i class="fas fa-star text-secondary"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                            </h5>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioRating" value="1" id="flexCheckChecked" onClick={()=>setRating(1)}/>
                                        <label className="form-check-label" for="flexCheckChecked">
                                            <h5 className="card-text">
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                            </h5>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioRating" value="2" id="flexCheckChecked" onClick={()=>setRating(2)}/>
                                        <label className="form-check-label" for="flexCheckChecked">
                                            <h5 className="card-text">
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                            </h5>
                                        </label>
                                    </div>
                                </div>
                                <div className=" col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioRating" value="3" id="flexCheckChecked" onClick={()=>setRating(3)}/>
                                        <label className="form-check-label" for="flexCheckChecked">
                                            <h5 className="card-text">
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                                <i class="fas fa-star text-secondary"></i>
                                            </h5>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="radioRating" value="4" id="flexCheckChecked" onClick={()=>setRating(4)}/>
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
                                        <input className="form-check-input" type="radio" name="radioRating" value="5" id="flexCheckChecked" onClick={()=>setRating(5)}/>
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
                                </div>
                            </div>
                            {/* ------------------------------ */}
                            
                            {/* ------------------------------ */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={handleClick}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}