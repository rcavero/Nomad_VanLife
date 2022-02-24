import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

export const FilterModal = () => {
    return (
        <div className="container-fluid mt-3 mb-0 d-grid justify-content-end pe-2">
            <button type="button" className="btn btn-primary right-button border border-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-filter pe-2"></i>Filter</button>
			{/* <!-- Modal --> */}
			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Filter</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							{/* ------------------------------ */}
							<h5 className="mt-1 p-0">Kind of Place</h5>
							<hr class="border-1 border-top border-secondary mt-0 pt-0"></hr>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								<label class="form-check-label" for="flexCheckDefault">
									<p className="fw-bold m-0 p-0"><i className="fas fa-campground text-success me-2"></i>Camping</p>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
								<label class="form-check-label" for="flexCheckChecked">
								<p className="fw-bold m-0 p-0"><i className="fas fa-caravan text-success me-2"></i>Van Parking</p>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
								<label class="form-check-label" for="flexCheckChecked">
								<p className="fw-bold m-0 p-0"><i className="fas fa-laptop-house text-success me-2"></i>Nomad Work</p>
								</label>
							</div>
							<hr class="border-1 border-top border-secondary"></hr>
							{/* ------------------------------ */}
							<h5 className="mt-1 p-0">Services</h5>
							<hr class="border-1 border-top border-secondary mt-0 pt-0"></hr>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								<label class="form-check-label" for="flexCheckDefault">
									<p className="fw-bold m-0 p-0"><i className="fas fa-shower text-primary me-2"></i>Shower</p>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
								<label class="form-check-label" for="flexCheckChecked">
								<p className="fw-bold m-0 p-0"><i className="fas fa-laptop text-primary me-2"></i>Wi-fi</p>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
								<label class="form-check-label" for="flexCheckChecked">
								<p className="fw-bold m-0 p-0"><i className="fas fa-gas-pump text-primary me-2"></i>Gas</p>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
								<label class="form-check-label" for="flexCheckChecked">
								<p className="fw-bold m-0 p-0"><i className="fas fa-bed text-primary me-2"></i>Beds</p>
								</label>
							</div>
							<hr class="border-1 border-top border-secondary"></hr>
							{/* ------------------------------ */}
							<h5 className="p-0 mt-1">Rating</h5>
							<hr class="border-1 border-top border-secondary mt-0 pt-0"></hr>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								<label class="form-check-label" for="flexCheckDefault">
									<h5 className="card-text">
										<i class="fas fa-star text-warning"></i>
										<i class="fas fa-star text-warning"></i>
										<i class="fas fa-star text-warning"></i>
										<i class="fas fa-star text-secondary"></i>
										<i class="fas fa-star text-secondary"></i>
									</h5>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
								<label class="form-check-label" for="flexCheckChecked">
								<h5 className="card-text">
										<i class="fas fa-star text-warning"></i>
										<i class="fas fa-star text-warning"></i>
										<i class="fas fa-star text-warning"></i>
										<i class="fas fa-star text-warning"></i>
										<i class="fas fa-star text-secondary"></i>
									</h5>
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
								<label class="form-check-label" for="flexCheckChecked">
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
						{/* ------------------------------ */}
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