import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

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
    const { store, actions } = useContext(Context);
    return (
        <div className="containter fluid">
            <nav className="navbar navbar-expand-md navbar-light bg-light border-3 border-bottom border-primary">
                <div className="container-fluid">
                    <Link className="text-decoration-none navbar-brand d-flex align-items-center py-0" to="/">
                        <i className="fas fa-caravan display-6 ms-2 pe-3"></i><strong className="fs-2">Nomad Vanlife</strong>
                    </Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menuNavegacion">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="menuNavegacion" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-3">
                            <Link className="text-decoration-none" to="/">
                                <li className="nav-item nav-link">Mapa</li>
                            </Link>
                            <li className="nav-item"><a className="nav-link disabled" href="#">Diario</a></li>
                            <Link className="text-decoration-none" to="/whishList">
                                <li className="nav-item nav-link">Wish List</li>
                            </Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Vistas
                                </a>
                                <ul className="dropdown-menu" style={{zIndex: "2001"}}>
                                    <Link className="text-decoration-none" to="/cardsGrid">
                                        <li className="dropdown-item">Vista Tarjetas</li>
                                    </Link>
                                    <Link className="text-decoration-none" to="/cards/1">
                                        <li className="dropdown-item">Vista Individual</li>
                                    </Link>
                                </ul>
                            </li>
                            {/* <Link className="text-decoration-none" to="/login1">
                                <li className="nav-item">
                                    <form className="container-fluid text-center">
                                        <button className="btn btn-outline-success me-2" type="button">Login</button>
                                    </form>
                                </li>
                            </Link> */}
                        </ul>
                            <div className="float-end ms-auto">
                                <form className="container-fluid text-center">
                                    {!store.token ? (
                                        <Link className="text-decoration-none" to="/login1">
                                            <button className="btn btn-outline-success me-0" type="button">Login</button>
                                        </Link>
                                    ) : (
                                        <button className="btn btn-outline-danger me-0" type="button" onClick={() => actions.logout() }>Logout</button>
                                    )}
                                    
                                </form>
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
