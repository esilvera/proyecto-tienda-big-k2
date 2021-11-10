import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const Products = () => {

    const { store: { products, path, extension }, actions: { selectProduct, addShoppingCart, foundShopCart } } = useContext(Context);

    return (
        <>
            {/* <header
                id="fh5co-header"
                className="fh5co-cover fh5co-cover-sm"
                role="banner"
                style={{ backgroundImage: "url(/image/img_bg_2.jpg)" }}
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div
                                    className="display-tc "
                                    data-animate-effect="fadeIn"
                                >
                                    <h1>BIG K2</h1>
                                    <h3>Products</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}
            <div id="fh5co-product">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <span>Cool Stuff</span>
                            <h2>Products.</h2>
                            <p>
                                Dignissimos asperiores vitae velit veniam totam fuga molestias
                                accusamus alias autem provident. Odit ab aliquam dolor eius.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            products === null ? (
                                <div className="spinner-grow text-secondary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) :
                                /* !!products && */
                                products.map((product, index) => {
                                    const { product_name } = product;

                                    return (
                                        <div className="col-md-4 text-center" key={index}>
                                            <div className="product">
                                                <div className="product-grid" style={{ backgroundImage: `url("/${path}${product_name}${extension}")` }}>
                                                    <div className="inner">
                                                        <p>
                                                            <Link to="#" className="icon">
                                                                <i className="icon-shopping-cart"
                                                                    onClick={() => {
                                                                        addShoppingCart(product_name)
                                                                    }}
                                                                />
                                                            </Link>
                                                            <Link to="/detail" className="icon">
                                                                <i className={"icon-"+"eye"}
                                                                    onClick={() => {
                                                                        selectProduct(product)
                                                                    }}
                                                                />
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>

                    <div class="gototop js-top">
                        <Link to="#" class="js-gotop"><i class="icon-arrow-up"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;