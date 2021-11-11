import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const Home = () => {

    const { store: { products, path, extension, list }, actions: { selectProduct } } = useContext(Context);

    return (
        <>
            {/* <div className="fh5co-loader"></div> */}
            {/* <div id="page"> */}
                
                <div id="fh5co-services" className="fh5co-bg-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 text-center">
                                <div
                                    className="feature-center animate-box"
                                    data-animate-effect="fadeIn"
                                >
                                    <span className="icon">
                                        <i className="icon-credit-card" />
                                    </span>
                                    <h3>Credit Card</h3>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts. Separated
                                        they live in Bookmarksgrove
                                    </p>
                                    <p>
                                        <Link to="#" className="btn btn-primary btn-outline">
                                            Learn More
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 text-center">
                                <div
                                    className="feature-center animate-box"
                                    data-animate-effect="fadeIn"
                                >
                                    <span className="icon">
                                        <i className="icon-wallet" />
                                    </span>
                                    <h3>Save Money</h3>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts. Separated
                                        they live in Bookmarksgrove
                                    </p>
                                    <p>
                                        <Link to="#" className="btn btn-primary btn-outline">
                                            Learn More
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 text-center">
                                <div
                                    className="feature-center animate-box"
                                    data-animate-effect="fadeIn"
                                >
                                    <span className="icon">
                                        <i className="icon-paper-plane" />
                                    </span>
                                    <h3>Free Delivery</h3>
                                    <p>
                                        Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts. Separated
                                        they live in Bookmarksgrove
                                    </p>
                                    <p>
                                        <Link to="#" className="btn btn-primary btn-outline">
                                            Learn More
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            {
                                products === null ? (
                                    <div className="spinner-grow text-secondary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ) :
                                    products.filter((product, index) => index < 3).map((product, index) => {
                                        const { product_name, product_price, product_desc } = product;
                                        console.log("index tiene: ", index)
                                        return (
                                            <div className="col-md-4 text-center" key={index}>
                                                <div className="product">
                                                    <div className="product-grid" style={{ backgroundImage: `url("/${path}${product_name}${extension}")` }}>
                                                        <div className="inner">
                                                            <p>
                                                                <Link to="/detail" className="icon">
                                                                    <i className="icon-shopping-cart" />
                                                                </Link>
                                                                <Link to="/detail" className="icon">
                                                                    <i className="icon-eye"
                                                                        onClick={() => {
                                                                            selectProduct(products)
                                                                        }}
                                                                    />
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="desc">
                                                        <h3>
                                                            <Link to="/detail">{product_desc}</Link>
                                                        </h3>
                                                        <span className="price">$ {product_price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </div>
                </div>
                <div id="fh5co-testimonial" className="fh5co-bg-section">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <span>Testimony</span>
                                <h2>Happy Clients</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="row animate-box">
                                    <div className="owl-carousel owl-carousel-fullwidth">
                                        <div className="item">
                                            <div className="testimony-slide active text-center">
                                                <figure>
                                                    <img src="images/Person1.jpg" alt="user" />
                                                </figure>
                                                <span>
                                                    Sandra Silvera, via{" "}
                                                    <Link to="#" className="twitter">
                                                        Twitter
                                                    </Link>
                                                </span>
                                                <blockquote>
                                                    <p>
                                                        “Far far away, behind the word mountains, far from the
                                                        countries Vokalia and Consonantia, there live the blind
                                                        texts. Separated they live in Bookmarksgrove right at
                                                        the coast of the Semantics, a large language ocean.”
                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-slide active text-center">
                                                <figure>
                                                    <img src="images/Person2.jpg" alt="user" />
                                                </figure>
                                                <span>
                                                    Dayanara Silvera, via{" "}
                                                    <Link to="#" className="twitter">
                                                        Twitter
                                                    </Link>
                                                </span>
                                                <blockquote>
                                                    <p>
                                                        “Separated they live in Bookmarksgrove right at the
                                                        coast of the Semantics, a large language ocean.”
                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-slide active text-center">
                                                <figure>
                                                    <img src="images/Person3.jpg" alt="user" />
                                                </figure>
                                                <span>
                                                    Milena Sanchez, via{" "}
                                                    <Link to="#" className="twitter">
                                                        Twitter
                                                    </Link>
                                                </span>
                                                <blockquote>
                                                    <p>
                                                        “Far from the countries Vokalia and Consonantia, there
                                                        live the blind texts. Separated they live in
                                                        Bookmarksgrove right at the coast of the Semantics, a
                                                        large language ocean.”
                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="fh5co-counter"
                    className="fh5co-bg fh5co-counter"
                    style={{ backgroundImage: "url(images/img_bg_5.jpg)" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="display-t">
                                <div className="display-tc">
                                    <div className="col-md-3 col-sm-6 animate-box">
                                        <div className="feature-center">
                                            <span className="icon">
                                                <i className="icon-eye" />
                                            </span>
                                            <span
                                                className="counter js-counter"
                                                data-from={0}
                                                data-to={22070}
                                                data-speed={5000}
                                                data-refresh-interval={50}
                                            >
                                                1
                                            </span>
                                            <span className="counter-label">Creativity Fuel</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 animate-box">
                                        <div className="feature-center">
                                            <span className="icon">
                                                <i className="icon-shopping-cart" />
                                            </span>
                                            <span
                                                className="counter js-counter"
                                                data-from={0}
                                                data-to={450}
                                                data-speed={5000}
                                                data-refresh-interval={50}
                                            >
                                                1
                                            </span>
                                            <span className="counter-label">Happy Clients</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 animate-box">
                                        <div className="feature-center">
                                            <span className="icon">
                                                <i className="icon-shop" />
                                            </span>
                                            <span
                                                className="counter js-counter"
                                                data-from={0}
                                                data-to={700}
                                                data-speed={5000}
                                                data-refresh-interval={50}
                                            >
                                                1
                                            </span>
                                            <span className="counter-label">All Products</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 animate-box">
                                        <div className="feature-center">
                                            <span className="icon">
                                                <i className="icon-clock" />
                                            </span>
                                            <span
                                                className="counter js-counter"
                                                data-from={0}
                                                data-to={5605}
                                                data-speed={5000}
                                                data-refresh-interval={50}
                                            >
                                                1
                                            </span>
                                            <span className="counter-label">Hours Spent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                <div className="gototop js-top">
                    <Link to="#" className="js-gotop">
                        <i className="icon-arrow-up" />
                    </Link>
                </div>
            {/* </div> */}
        </>

    )
}

export default Home;