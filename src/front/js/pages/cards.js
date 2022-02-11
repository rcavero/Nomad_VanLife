import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { FilterModal } from "../component/filterModal";
import { useParams } from "react-router-dom";

export const Cards = () => {

	const [nomadVanPlace, setNomadVanPlace] = useState({})

    const placeId = useParams().placeId

    const {actions} = useContext(Context)
	
    useEffect(()=>{
        actions.getNomadVanPlace(placeId).then(response =>{
            console.log(response)
            setNomadVanPlace(response)
        })
    },[])

	return (
		<div className="container-fluid bg-light col-xl-7 col-lg-8 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
			{/* <div className="container-fluid m-auto m-0 p-0">
				<FilterModal />
			</div> */}
			<Card title={nomadVanPlace.title} adress={`lat: ${nomadVanPlace.location} lng: ${nomadVanPlace.location}`} picture={nomadVanPlace.image} description={nomadVanPlace.description} services={[1, 1, 1, 1]} rate={nomadVanPlace.rating} kindPlace={nomadVanPlace.kind_of_place} date={nomadVanPlace.date}/>
			{/* <Card title="Coast SEA" adress="Cala Macarelleta / Menorca (España)" picture="https://asa.com/wordpress/wp-content/uploads/2018/10/News-2018-10-Buying-First-Sailboat-Featured-1024x512.jpg" description="Una cala preciosa en medio del Mediterráneo donde se puede pasar la noche en medio de la naturaleza." services={[1, 0, 0, 1]} rate={4} kindPlace={2} /> */}
		</div>
	);
};