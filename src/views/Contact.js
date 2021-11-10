import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            {/* <header
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
                                    className="display-tc "
                                    data-animate-effect="fadeIn"
                                >
                                    <h1>BIG K2</h1>
                                    <h3>Contact Us</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}
            <div id="fh5co-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-md-push-1 ">
                            <div className="fh5co-contact-info">
                                <h3>Contact Information</h3>
                                <ul>
                                    <li className="address">
                                       Lira 570, <br /> Suite 721 Santiago de Chile
                                    </li>
                                    <li className="phone">
                                        <Link to="tel://1234567920">+ 56 9 35235598</Link>
                                    </li>
                                    <li className="email">
                                        <Link to="mailto:info@yoursite.com">info@yoursite.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <h3>Get In Touch</h3>
                            <form action="#">
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        {/* <label for="fname">First Name</label> */}
                                        <input
                                            type="text"
                                            id="fname"
                                            className="form-control"
                                            placeholder="Your firstname"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        {/* <label for="lname">Last Name</label> */}
                                        <input
                                            type="text"
                                            id="lname"
                                            className="form-control"
                                            placeholder="Your lastname"
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        {/* <label for="email">Email</label> */}
                                        <input
                                            type="text"
                                            id="email"
                                            className="form-control"
                                            placeholder="Your email address"
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        {/* <label for="subject">Subject</label> */}
                                        <input
                                            type="text"
                                            id="subject"
                                            className="form-control"
                                            placeholder="Your subject of this message"
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        {/* <label for="message">Message</label> */}
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols={30}
                                            rows={10}
                                            className="form-control"
                                            placeholder="Say something about us"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        defaultValue="Send Message"
                                        className="btn btn-primary"
                                    />
                                </div>
                            </form>
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

export default Contact;