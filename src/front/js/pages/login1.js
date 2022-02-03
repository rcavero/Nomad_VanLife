import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login1.css";

export const Login1 = () => {
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign in</h3>

                                <div className="form-outline mb-4">
                                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="e-mail"/>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="password"/>
                                </div>

                                {/* <!-- Checkbox --> */}
                                <div className="form-check d-flex justify-content-start mb-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="form1Example3"
                                    />
                                    <label className="form-check-label ms-2" for="form1Example3"> Remember password </label>
                                </div>

                                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}