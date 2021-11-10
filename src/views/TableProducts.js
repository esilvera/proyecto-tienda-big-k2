import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const TableProducts = () => {

    const { store: { products }, actions: { deleteApiProducts, selectProduct } } = useContext(Context);

    return (
        <div className="row">
            <div className="col-md-12 float-end">
                <Link to="/addproducts" className="btn btn-primary btn-sm">Add Products</Link>
                <Link to="/maintenance" className="btn btn-info" type="submit">Regresar</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Price</th>
                        <th scope="col">Product Type ID</th>
                    </tr>
                </thead>
                {
                    products === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) :
                        /* !!products && */
                        products.map((product, index) => {
                            const { product_id, product_name, product_desc, product_brand, product_price, product_type_name } = product;

                            return (
                                <tbody>
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>{product_name}</td>
                                        <td>{product_desc}</td>
                                        <td>{product_brand}</td>
                                        <td>{product_price}</td>
                                        <td>{product_type_name}</td>
                                        <button>
                                            <Link
                                                onClick={() => {
                                                    console.log("producto seleccionado: ", product_id)
                                                    selectProduct(product_id)
                                                }} to="/editproducts" className="icon-pencil">
                                            </Link>
                                        </button>
                                        <button>
                                            <i className="icon-trash"
                                                onClick={() => {
                                                    deleteApiProducts(product)
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

export default TableProducts;