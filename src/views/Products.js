import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <>
            <header
                id="fh5co-header"
                className="fh5co-cover fh5co-cover-sm"
                role="banner"
                style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div
                                    className="display-tc animate-box"
                                    data-animate-effect="fadeIn"
                                >
                                    <h1>BIG K2</h1>
                                    <h3>Products</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="fh5co-product">
                <div className="container">
                    <div className="row animate-box">
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
                        <div className="col-md-4 text-center animate-box">
                            <div className="product">
                                <div
                                    className="product-grid"
                                    style={{ backgroundImage: "url(images/product-1.jpg)" }}
                                >
                                    <div className="inner">
                                        <p>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-shopping-cart" />
                                            </Link>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-eye" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="desc">
                                    <h3>
                                        <Link to="/detail">Hauteville Concrete Rocking Chair</Link>
                                    </h3>
                                    <span className="price">$350</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="product">
                                <div
                                    className="product-grid"
                                    style={{ backgroundImage: "url(images/product-2.jpg)" }}
                                >
                                    <div className="inner">
                                        <p>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-shopping-cart" />
                                            </Link>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-eye" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="desc">
                                    <h3>
                                        <Link to="/detail">Pavilion Speaker</Link>
                                    </h3>
                                    <span className="price">$600</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="product">
                                <div
                                    className="product-grid"
                                    style={{ backgroundImage: "url(images/product-3.jpg)" }}
                                >
                                    <div className="inner">
                                        <p>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-shopping-cart" />
                                            </Link>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-eye" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="desc">
                                    <h3>
                                        <Link to="/detail">Ligomancer</Link>
                                    </h3>
                                    <span className="price">$780</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center animate-box">
                            <div className="product">
                                <div
                                    className="product-grid"
                                    style={{ backgroundImage: "url(images/product-4.jpg)" }}
                                >
                                    <div className="inner">
                                        <p>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-shopping-cart" />
                                            </Link>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-eye" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="desc">
                                    <h3>
                                        <Link to="/detail">Alato Cabinet</Link>
                                    </h3>
                                    <span className="price">$800</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="product">
                                <div
                                    className="product-grid"
                                    style={{ backgroundImage: "url(images/product-5.jpg)" }}
                                >
                                    <div className="inner">
                                        <p>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-shopping-cart" />
                                            </Link>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-eye" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="desc">
                                    <h3>
                                        <Link to="/detail">Earing Wireless</Link>
                                    </h3>
                                    <span className="price">$100</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="product">
                                <div
                                    className="product-grid"
                                    style={{ backgroundImage: "url(images/product-6.jpg)" }}
                                >
                                    <div className="inner">
                                        <p>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-shopping-cart" />
                                            </Link>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-eye" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="desc">
                                    <h3>
                                        <Link to="/detail">Sculptural Coffee Table</Link>
                                    </h3>
                                    <span className="price">$960</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center animate-box">
                            <div className="product">
                                <div
                                    className="product-grid"
                                    style={{ backgroundImage: "url(images/product-7.jpg)" }}
                                >
                                    <div className="inner">
                                        <p>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-shopping-cart" />
                                            </Link>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-eye" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="desc">
                                    <h3>
                                        <Link to="/detail">The WW Chair</Link>
                                    </h3>
                                    <span className="price">$540</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="product">
                                <div
                                    className="product-grid"
                                    style={{ backgroundImage: "url(images/product-8.jpg)" }}
                                >
                                    <div className="inner">
                                        <p>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-shopping-cart" />
                                            </Link>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-eye" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="desc">
                                    <h3>
                                        <Link to="/detail">Himitsu Money Box</Link>
                                    </h3>
                                    <span className="price">$55</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="product">
                                <div
                                    className="product-grid"
                                    style={{ backgroundImage: "url(images/product-9.jpg)" }}
                                >
                                    <div className="inner">
                                        <p>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-shopping-cart" />
                                            </Link>
                                            <Link to="/detail" className="icon">
                                                <i className="icon-eye" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="desc">
                                    <h3>
                                        <Link to="/detail">Ariane Prin</Link>
                                    </h3>
                                    <span className="price">$99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gototop js-top">
                <Link to="#" class="js-gotop"><i class="icon-arrow-up"></i></Link>
            </div>
        </>
    )
}

export default Products;