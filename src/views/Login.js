import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../store/appContext';

const Login = () => {

    const { store: { email, password, error, huboError }, actions: { loginSubmit, handleChange } } = useContext(Context);
    const history = useHistory();

    return (
        <div id="fh5co-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <h3>Login</h3>
                        <form onSubmit={(evento) => loginSubmit(evento, history)} method='POST'>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    {/* <label for="email">Email</label> */}
                                    <input type="text" className="form-control" id="email" name="email" value={email} placeholder="Your Email" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-6">
                                    {/* <label for="password">Password</label> */}
                                    <input type="password" className="form-control" id="password" name="password" value={password} maxlength="20" placeholder="Password" onChange={handleChange} />
                                </div>
                            </div>
                            {
                                huboError ? (
                                    <span>{error}</span>
                                ) :
                                    (
                                        <span></span>
                                    )
                            }
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
