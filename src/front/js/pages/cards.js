import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Cards = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid bg-light pb-3">
			<button type="button" className="btn btn-primary right-button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-filter pe-2"></i>Filter</button>
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
							<h5 className="mb-0 p-0">Rate</h5>
							<hr class="border-2 border-top border-secondary"></hr>
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
							{/* ------------------------------ */}
							<h5 className="mt-4 p-0">Kind of Place</h5>
							<hr class="border-2 border-top border-secondary"></hr>
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
							{/* ------------------------------ */}
							<h5 className="mt-4 p-0">Services</h5>
							<hr class="border-2 border-top border-secondary"></hr>
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
							{/* ------------------------------ */}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-success">Apply Filters</button>
						</div>
					</div>
				</div>
			</div>
			<Card title="NOMAD Dessert Place" adress="Algún lugar del desierto, S/N / Valencia (España)" picture="https://lp-cms-production.imgix.net/2020-12/Bearfoot%20Theory_California_Joshua%20Tree_Sprinter%20Van_Interior%20Working2.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1" description="Un bonito lugar en medio del desierto en el que descansar y ver el amanecer tomando un café. No hay nada alrededor, es un desierto." services={[1, 1, 1, 1]} rate={3} kindPlace={1} />
			<Card title="Coast SEA" adress="Cala Macarelleta / Menorca (España)" picture="https://asa.com/wordpress/wp-content/uploads/2018/10/News-2018-10-Buying-First-Sailboat-Featured-1024x512.jpg" description="Una cala preciosa en medio del Mediterráneo donde se puede pasar la noche en medio de la naturaleza." services={[1, 0, 0, 1]} rate={4} kindPlace={2} />
		</div>
	);
};