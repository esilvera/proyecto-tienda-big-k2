import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="fh5co-loader"></div>

            <div id="page">
                {/* <nav className="fh5co-nav" role="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-xs-2">
                                <div id="fh5co-logo">
                                   <Link to="index.html">Shop.</Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-6 text-center menu-1">
                                <ul>
                                    <li className="has-dropdown">
                                       <Link to="product.html">Shop</Link>
                                        <ul className="dropdown">
                                            <li>
                                               <Link to="/detail">Single Shop</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                       <Link to="about.html">About</Link>
                                    </li>
                                    <li className="has-dropdown">
                                       <Link to="services.html">Services</Link>
                                        <ul className="dropdown">
                                            <li>
                                               <Link to="#">Web Design</Link>
                                            </li>
                                            <li>
                                               <Link to="#">eCommerce</Link>
                                            </li>
                                            <li>
                                               <Link to="#">Branding</Link>
                                            </li>
                                            <li>
                                               <Link to="#">API</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                       <Link to="contact.html">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-xs-4 text-right hidden-xs menu-2">
                                <ul>
                                    <li className="search">
                                        <div className="input-group">
                                            <input type="text" placeholder="Search.." />
                                            <span className="input-group-btn">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="icon-search" />
                                                </button>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="shopping-cart">
                                       <Link to="#" className="cart">
                                            <span>
                                                <small>0</small>
                                                <i className="icon-shopping-cart" />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav> */}
                <aside id="fh5co-hero" className="js-fullheight">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{ backgroundImage: "url(images/img_bg_1.jpg)" }}>
                                <div className="overlay-gradient" />
                                <div className="container">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <span className="price">$800</span>
                                                <h2>Alato Cabinet</h2>
                                                <p>
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts. Separated they live in Bookmarksgrove.
                                                </p>
                                                <p>
                                                   <Link to="/detail"
                                                        className="btn btn-primary btn-outline btn-lg"
                                                    >
                                                        Purchase Now
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}>
                                <div className="container">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <span className="price">$530</span>
                                                <h2>The Haluz Rocking Chair</h2>
                                                <p>
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts. Separated they live in Bookmarksgrove.
                                                </p>
                                                <p>
                                                    <Link to="/detail"
                                                        className="btn btn-primary btn-outline btn-lg"
                                                    >
                                                        Purchase Now
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: "url(images/img_bg_3.jpg)" }}>
                                <div className="container">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <span className="price">$750</span>
                                                <h2>Alato Cabinet</h2>
                                                <p>
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts. Separated they live in Bookmarksgrove.
                                                </p>
                                                <p>
                                                    <Link to="/detail"
                                                        className="btn btn-primary btn-outline btn-lg"
                                                    >
                                                        Purchase Now
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: "url(images/img_bg_4.jpg)" }}>
                                <div className="container">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <span className="price">$540</span>
                                                <h2>The WW Chair</h2>
                                                <p>
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts. Separated they live in Bookmarksgrove.
                                                </p>
                                                <p>
                                                    <Link to="/detail"
                                                        className="btn btn-primary btn-outline btn-lg"
                                                    >
                                                        Purchase Now
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
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
                                        <span className="sale">Sale</span>
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
                                                    <img src="images/person1.jpg" alt="user" />
                                                </figure>
                                                <span>
                                                    Jean Doe, via{" "}
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
                                                    <img src="images/person2.jpg" alt="user" />
                                                </figure>
                                                <span>
                                                    John Doe, via{" "}
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
                                                    <img src="images/person3.jpg" alt="user" />
                                                </figure>
                                                <span>
                                                    John Doe, via{" "}
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
                {/* <div id="fh5co-started">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2>Newsletter</h2>
                                <p>Just stay tune for our latest Product. Now you can subscribe</p>
                            </div>
                        </div>
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2">
                                <form className="form-inline">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="email" className="sr-only">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <button type="submit" className="btn btn-default btn-block">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <footer id="fh5co-footer" role="contentinfo">
                    <div className="container">
                        <div className="row row-pb-md">
                            <div className="col-md-4 fh5co-widget">
                                <h3>Shop.</h3>
                                <p>
                                    Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                                    reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
                                </p>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                                <ul className="fh5co-footer-links">
                                    <li>
                                       <Link to="#">About</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Help</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Contact</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Terms</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Meetups</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                                <ul className="fh5co-footer-links">
                                    <li>
                                       <Link to="#">Shop</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Privacy</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Testimonials</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Handbook</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Held Desk</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                                <ul className="fh5co-footer-links">
                                    <li>
                                       <Link to="#">Find Designers</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Find Developers</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Teams</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Advertise</Link>
                                    </li>
                                    <li>
                                       <Link to="#">API</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row copyright">
                            <div className="col-md-12 text-center">
                                <p>
                                    <small className="block">
                                        © 2016 Free HTML5. All Rights Reserved.
                                    </small>
                                    <small className="block">
                                        Designed by{" "}
                                       <Link to="http://freehtml5.co/" target="_blank">
                                            FreeHTML5.co
                                        </Link>{" "}
                                        Demo Images:{" "}
                                       <Link to="http://blog.gessato.com/" target="_blank">
                                            Gessato
                                        </Link>{" "}
                                        &amp;{" "}
                                       <Link to="http://unsplash.co/" target="_blank">
                                            Unsplash
                                        </Link>
                                    </small>
                                </p>
                                <p></p>
                                <ul className="fh5co-social-icons">
                                    <li>
                                       <Link to="#">
                                            <i className="icon-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                       <Link to="#">
                                            <i className="icon-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                       <Link to="#">
                                            <i className="icon-linkedin" />
                                        </Link>
                                    </li>
                                    <li>
                                       <Link to="#">
                                            <i className="icon-dribbble" />
                                        </Link>
                                    </li>
                                </ul>
                                <p />
                            </div>
                        </div>
                    </div>
                </footer> */}
            </div>
            <div className="gototop js-top">
               <Link to="#" className="js-gotop">
                    <i className="icon-arrow-up" />
                </Link>
            </div>
        </>

    )
}

export default Home;