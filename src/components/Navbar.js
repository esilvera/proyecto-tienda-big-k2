import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fh5co-nav" role="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-xs-2">
                        <div id="fh5co-logo">
                            <Link to="/">BIG K2</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-6 text-center menu-1">
                        <ul>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
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
        </nav>

    )
}

export default Navbar;