import React from "react";
import { Link } from "react-router-dom";

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-light">
// 			<div className="container">
// 				<Link to="/">
// 					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 				</Link>
// 				<div className="ml-auto">
// 					<Link to="/demo">
// 						<button className="btn btn-primary">Check the Context in action</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

export const Navbar = () => {
    return (
        <div className="containter fluid">
            <nav className="navbar navbar-expand-md navbar-light bg-light border-3 border-bottom border-primary">
                <div className="container-fluid">
					<Link to="/">
                    	<a className="navbar-brand text-decoration-none d-flex align-items-center py-0"><i class="fas fa-caravan display-6 ms-2 pe-3"></i><strong className="fs-2">Nomad Vanlife</strong></a>
					</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menuNavegacion">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="#menuNavegacion" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-3">
                            <li className="nav-item"><a className="nav-link" href="#">Calendario</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Diario</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Ruta</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Mapa
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Vista Mapa</a></li>
									<Link to="/cards">
										<li><a className="text-decoration-none dropdown-item">Vista Tarjetas</a></li>
									</Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
