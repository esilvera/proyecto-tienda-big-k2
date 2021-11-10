import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const EditProducts = (evento) => {

    const { store: { error, huboError }, actions: { editApiProducts, handleChange } } = useContext(Context);
    const {prod_name, prod_desc, prod_brand, prod_price, prod_type_id} = evento;
    console.log("evento tiene:  ", evento);

    return (
        <div id="fh5co-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Edit Products</h3>
                        <form onSubmit={editApiProducts} method='POST'>
                            <div className="row form-group">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" id="prod_name" name="prod_name" value={prod_name} maxlength="50" placeholder="Nombre del producto" onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" id="prod_brand" name="prod_brand" value={prod_brand} placeholder="Marca del producto" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <input type="text" className="form-control" id="prod_desc" name="prod_desc" value={prod_desc} maxlength="200" placeholder="Descripción del producto" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-3">
                                    <input type="number" className="form-control" id="prod_price" name="prod_price" value={prod_price} step="0.50" min="1.0" max="1000000" placeholder="Precio del producto" onChange={handleChange} />
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" id="prod_type_id" name="prod_type_id" value={prod_type_id} min="1" max="5" placeholder="Type ID del producto" onChange={handleChange} />
                                    {/* <select class="form-select" id="prod_type_id" name="prod_type_id" placeholder="Type ID del producto" onChange={handleChange} >
                                        <option selected></option>
                                        <option>Repuestos</option>
                                        <option>Accesorios</option>
                                    </select> */}
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
                                <button className="btn btn-primary" type="submit">Modificar</button>
                                <Link to="/tableproducts" className="btn btn-info" type="submit">Regresar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditProducts;