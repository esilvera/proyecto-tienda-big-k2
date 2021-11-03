import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const Login = () => {
    return (
        <>
            <div id="fh5co-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <h3>Login</h3>
                            <form action="#">
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        {/* <label for="email">Email</label> */}
                                        <input
                                            type="text"
                                            id="email"
                                            className="form-control"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        {/* <label for="password">Password</label> */}
                                        <input
                                            type="text"
                                            id="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        defaultValue="Send Message"
                                        className="btn btn-primary"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;