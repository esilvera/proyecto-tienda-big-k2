import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const AddServices = () => {

    const { store: { service_name, service_desc, error, huboError }, actions: { addApiServices, handleChange } } = useContext(Context);

    return (
        <div id="fh5co-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Add Services</h3>
                        <form onSubmit={addApiServices} method='POST'>
                            <div className="row form-group">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" id="service_name" name="service_name" value={service_name} maxlength="50" placeholder="Nombre del servicio" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" className="form-control" id="service_desc" name="service_desc" value={service_desc} maxlength="200" placeholder="Descripción del servicio" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-6">
                                    <select className="col-md-4" name="service_icon" id="service_icon" onClick={handleChange} >
                                        <option value="icon-credit-card">Credit Card</option>
                                        <option value="icon-wallet">Save Money</option>
                                        <option value="icon-paper-plane">Free Delivery</option>
                                        <option value="icon-calendar">Lifetime Warranty</option>
                                        <option value="icon-clapperboard">Branded Model</option>
                                    </select>
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
                                <button className="btn btn-primary" type="submit">Añadir</button>
                                <Link to="/tableServices" className="btn btn-info" type="submit">Regresar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddServices;