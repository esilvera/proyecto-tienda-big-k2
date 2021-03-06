import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const Register = () => {

    const { store: { fname, lname, email, password, error, huboError }, actions: { registerSubmit, handleChange } } = useContext(Context);
    /* const history = useHistory(); */

    return (
        <div id="fh5co-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <h3>Register</h3>
                        <form onSubmit={registerSubmit} method='POST'>
                            <div className="row form-group">
                                <div className="col-md-6">
                                    {/* <label for="fname">First Name</label> */}
                                    <input type="text" className="form-control" id="fname" name="fname" value={fname} maxlength="30" placeholder="First Name" onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    {/* <label for="lname">Last Name</label> */}
                                    <input type="text" className="form-control" id="lname" name="lname" value={lname} maxlength="30" placeholder="Last Name" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    {/* <label for="email">Email</label> */}
                                    <input type="text" className="form-control" id="email" name="email" value={email} maxlength="50" placeholder="Your Email" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-6">
                                    {/* <label for="password">Password</label> */}
                                    <input type="password" className="form-control" id="password" name="password" value={password} maxlength="20" placeholder="Password" onChange={handleChange} />
                                </div>
                            </div>
                            {/* <div className="row form-group">
                                <div className="col-md-3">
                                    <label for="role">Role</label>
                                    <input type="number" className="form-control" id="role" name="role" placeholder="" onChange={handleChange} />
                                </div>
                            </div> */}
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
                                <Link to="/" className="btn btn-info" type="submit">Regresar</Link>
                                {/* <button className="btn btn-info" onClick={() => history.goBack()} >Regresar</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;