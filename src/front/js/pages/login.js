import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Login = () => {
    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4 text-black">

                        <div className="px-5 ms-xl-4">
                            <i className="fas fa-caravan me-3 pt-5 mt-xl-4 display-6"></i>
                            <span className="h1 fw-bold mb-0">Nomad Vanlife</span>
                        </div>

                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                            <form>

                                <h3 className="fw-normal mb-3 pb-3">Log in</h3>

                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example18" className="form-control form-control-lg" />
                                    <label className="form-label" for="form2Example18">Email address</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example28" class="form-control form-control-lg" />
                                    <label className="form-label" for="form2Example28">Password</label>
                                </div>

                                <div class="pt-1 mb-4">
                                    <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
                                </div>

                                <p class="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                                <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p> 

                            </form>

                        </div>

                    </div>
                    <div className="col-sm-8 px-0 d-none d-sm-block">
                        <img id="imageLogin" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login image" className="w-100 vh-100"/>
                    </div>
                </div>
            </div>
        </section>
    )
}