import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import "../../styles/cardsGrid.css";

import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { FilterModal } from "../component/filterModal";

export const CardsGrid = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid bg-light pb-3 col-lg-10 col-md-12 col-sm-12 col-xs-12 m-auto">
            <div className="container-fluid m-0 p-0">
                <FilterModal />
            </div>
            {/* <div className="container-fluid col-lg-10 col-md-10 col-sm-12 col-xs-12 m-auto m-0 p-0"> */}
            <div className="container-fluid d-flex row row-cols-xs-1 row-cols-md-2 row-cols-xl-3 g-4 m-auto p-0">
                <Card title="NOMAD Dessert Place" adress="Algún lugar del desierto, S/N / Valencia (España)" picture="https://lp-cms-production.imgix.net/2020-12/Bearfoot%20Theory_California_Joshua%20Tree_Sprinter%20Van_Interior%20Working2.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1" description="Un bonito lugar en medio del desierto en el que descansar y ver el amanecer tomando un café. No hay nada alrededor, es un desierto." services={[1, 1, 1, 1]} rate={3} kindPlace={1} />
                <Card title="Coast SEA" adress="Cala Macarelleta / Menorca (España)" picture="https://asa.com/wordpress/wp-content/uploads/2018/10/News-2018-10-Buying-First-Sailboat-Featured-1024x512.jpg" description="Una cala preciosa en medio del Mediterráneo donde se puede pasar la noche en medio de la naturaleza." services={[1, 0, 0, 1]} rate={4} kindPlace={2} />
                <Card title="NOMAD Dessert Place" adress="Algún lugar del desierto, S/N / Valencia (España)" picture="https://cdna.artstation.com/p/assets/images/images/016/753/178/large/ash-es-sunset-mountain-2.jpg?1553340774" description="Un bonito lugar en medio del desierto en el que descansar y ver el amanecer tomando un café. No hay nada alrededor, es un desierto." services={[1, 1, 1, 1]} rate={3} kindPlace={1} />
                <Card title="Coast SEA" adress="Cala Macarelleta / Menorca (España)" picture="https://static8.depositphotos.com/1022400/1002/i/950/depositphotos_10024914-stock-photo-vertical-beach.jpg" description="Una cala preciosa en medio del Mediterráneo donde se puede pasar la noche en medio de la naturaleza." services={[1, 0, 0, 1]} rate={4} kindPlace={2} />
                <Card title="NOMAD Dessert Place" adress="Algún lugar del desierto, S/N / Valencia (España)" picture="https://lp-cms-production.imgix.net/2020-12/Bearfoot%20Theory_California_Joshua%20Tree_Sprinter%20Van_Interior%20Working2.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1" description="Un bonito lugar en medio del desierto en el que descansar y ver el amanecer tomando un café. No hay nada alrededor, es un desierto." services={[1, 1, 1, 1]} rate={3} kindPlace={1} />
                <Card title="Coast SEA" adress="Cala Macarelleta / Menorca (España)" picture="https://asa.com/wordpress/wp-content/uploads/2018/10/News-2018-10-Buying-First-Sailboat-Featured-1024x512.jpg" description="Una cala preciosa en medio del Mediterráneo donde se puede pasar la noche en medio de la naturaleza." services={[1, 0, 0, 1]} rate={4} kindPlace={2} />
                <Card title="NOMAD Dessert Place" adress="Algún lugar del desierto, S/N / Valencia (España)" picture="https://lp-cms-production.imgix.net/2020-12/Bearfoot%20Theory_California_Joshua%20Tree_Sprinter%20Van_Interior%20Working2.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1" description="Un bonito lugar en medio del desierto en el que descansar y ver el amanecer tomando un café. No hay nada alrededor, es un desierto." services={[1, 1, 1, 1]} rate={3} kindPlace={1} />
                <Card title="Coast SEA" adress="Cala Macarelleta / Menorca (España)" picture="https://asa.com/wordpress/wp-content/uploads/2018/10/News-2018-10-Buying-First-Sailboat-Featured-1024x512.jpg" description="Una cala preciosa en medio del Mediterráneo donde se puede pasar la noche en medio de la naturaleza." services={[1, 0, 0, 1]} rate={4} kindPlace={2} />
            </div>
        </div>
    );
};