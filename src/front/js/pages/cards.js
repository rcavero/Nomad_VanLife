import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { FilterModal } from "../component/filterModal";

export const Cards = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid bg-light col-xl-7 col-lg-8 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
			{/* <div className="container-fluid m-auto m-0 p-0">
				<FilterModal />
			</div> */}
			<Card title="NOMAD Dessert Place" adress="Algún lugar del desierto, S/N / Valencia (España)" picture="https://lp-cms-production.imgix.net/2020-12/Bearfoot%20Theory_California_Joshua%20Tree_Sprinter%20Van_Interior%20Working2.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1" description="Un bonito lugar en medio del desierto en el que descansar y ver el amanecer tomando un café. No hay nada alrededor, es un desierto." services={[1, 1, 1, 1]} rate={3} kindPlace={1} />
			<Card title="Coast SEA" adress="Cala Macarelleta / Menorca (España)" picture="https://asa.com/wordpress/wp-content/uploads/2018/10/News-2018-10-Buying-First-Sailboat-Featured-1024x512.jpg" description="Una cala preciosa en medio del Mediterráneo donde se puede pasar la noche en medio de la naturaleza." services={[1, 0, 0, 1]} rate={4} kindPlace={2} />
		</div>
	);
};