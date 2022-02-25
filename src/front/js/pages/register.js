import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/login1.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [created, setCreated] = useState(false);
    //const [passwordConfirm, setPasswordConfirm] = useState("");   
    const history = useHistory();

    const handleClick = () => {
        actions.register(email, password);
        setCreated(true);
    }

    if (created){
        history.push("/login1");
        alert("User: "+email+" has been created. Please Login")
    } 

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-75">
                    <div className="d-flex justify-content-center align-items-center title">
                        <h1 className="d-flex align-items-center py-0"><i class="fas fa-caravan align-items-center ms-2 pe-3 logo"></i><strong className="titleLogo">Nomad Vanlife</strong></h1>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign Up</h3>

                                <div className="form-outline mb-4">
                                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="e-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                                </div>

                                {/* <div class="form-outline mb-4">
                                    <input type="password-confirm" id="typePasswordX-2" className="form-control form-control-lg" placeholder="confirm password" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} />
                                </div> */}

                                {/* <!-- Checkbox --> */}
                                {/* <div className="form-check d-flex justify-content-start mb-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="form1Example3"
                                    />
                                    <label className="form-check-label ms-2" for="form1Example3"> Remember password </label>
                                </div> */}

                                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleClick} >Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}