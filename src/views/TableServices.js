import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const TableServices = () => {

    const { store: { services }, actions: { deleteApiServices, selectService } } = useContext(Context);

    return (
        <div className="row">
            <div className="col-md-12 float-end">
                <Link to="/addservices" className="btn btn-primary btn-sm">Add Services</Link>
                <Link to="/maintenance" className="btn btn-info" type="submit">Regresar</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Services Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                {
                    services === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) :
                        /* !!services && */
                        services.map((service, index) => {
                            const { service_id, service_name, service_desc } = service;

                            return (
                                <tbody>
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>{service_name}</td>
                                        <td>{service_desc}</td>
                                        <button>
                                            <Link
                                                onClick={() => {
                                                    console.log("servicio seleccionado: ", service_id)
                                                    selectService(service_id)
                                                }} to="/editservices" className="icon-pencil">
                                            </Link>
                                        </button>
                                        <button>
                                            <i className="icon-trash"
                                                onClick={() => {
                                                    deleteApiServices(service)
                                                }}
                                            />
                                        </button>
                                    </tr>
                                </tbody>
                            )
                        })
                }
            </table>
        </div >
    )
}

export default TableServices;