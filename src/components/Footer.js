import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="fh5co-footer" role="contentinfo">
            <div className="container">
                <div className="row row-pb-md">
                    <div className="col-md-4 fh5co-widget">
                        <h3>BIG K2</h3>
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
                                © 2021  Edwards A. Silvera León. All Rights Reserved.
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
        </footer>

    )
}

export default Footer;