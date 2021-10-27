import React from "react";
import { Link } from "react-router-dom";

const Detail = () => {
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
                                    <h3>Product Details</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="fh5co-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 animate-box">
                            <div className="owl-carousel owl-carousel-fullwidth product-carousel">
                                <div className="item">
                                    <div className="active text-center">
                                        <figure>
                                            <img src="images/product-single-1.jpg" alt="user" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="active text-center">
                                        <figure>
                                            <img src="images/product-single-2.jpg" alt="user" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="active text-center">
                                        <figure>
                                            <img src="images/product-single-3.jpg" alt="user" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="active text-center">
                                        <figure>
                                            <img src="images/product-single-4.jpg" alt="user" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="active text-center">
                                        <figure>
                                            <img src="images/product-single-5.jpg" alt="user" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="row animate-box">
                                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                    <h2>Hauteville Rocking Chair</h2>
                                    <p>
                                       <Link to="#" className="btn btn-primary btn-outline btn-lg">
                                            Add to Cart
                                        </Link>
                                       <Link to="#" className="btn btn-primary btn-outline btn-lg">
                                            Compare
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="fh5co-tabs animate-box">
                                <ul className="fh5co-tab-nav">
                                    <li className="active">
                                       <Link to="#" data-tab={1}>
                                            <span className="icon visible-xs">
                                                <i className="icon-file" />
                                            </span>
                                            <span className="hidden-xs">Product Details</span>
                                        </Link>
                                    </li>
                                    <li>
                                       <Link to="#" data-tab={2}>
                                            <span className="icon visible-xs">
                                                <i className="icon-bar-graph" />
                                            </span>
                                            <span className="hidden-xs">Specification</span>
                                        </Link>
                                    </li>
                                    <li>
                                       <Link to="#" data-tab={3}>
                                            <span className="icon visible-xs">
                                                <i className="icon-star" />
                                            </span>
                                            <span className="hidden-xs">Feedback &amp; Ratings</span>
                                        </Link>
                                    </li>
                                </ul>
                                {/* Tabs */}
                                <div className="fh5co-tab-content-wrap">
                                    <div
                                        className="fh5co-tab-content tab-content active"
                                        data-tab-content={1}
                                    >
                                        <div className="col-md-10 col-md-offset-1">
                                            <span className="price">SRP: $350</span>
                                            <h2>Hauteville Rocking Chair</h2>
                                            <p>
                                                Paragraph placeat quis fugiat provident veritatis quia iure
                                                a debitis adipisci dignissimos consectetur magni quas eius
                                                nobis reprehenderit soluta eligendi quo reiciendis fugit?
                                                Veritatis tenetur odio delectus quibusdam officiis est.
                                            </p>
                                            <p>
                                                Ullam dolorum iure dolore dicta fuga ipsa velit veritatis
                                                molestias totam fugiat soluta accusantium omnis quod
                                                similique placeat at. Dolorum ducimus libero fuga molestiae
                                                asperiores obcaecati corporis sint illo facilis.
                                            </p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h2 className="uppercase">Keep it simple</h2>
                                                    <p>
                                                        Ullam dolorum iure dolore dicta fuga ipsa velit
                                                        veritatis
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <h2 className="uppercase">Less is more</h2>
                                                    <p>
                                                        Ullam dolorum iure dolore dicta fuga ipsa velit
                                                        veritatis
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="fh5co-tab-content tab-content"
                                        data-tab-content={2}
                                    >
                                        <div className="col-md-10 col-md-offset-1">
                                            <h3>Product Specification</h3>
                                            <ul>
                                                <li>
                                                    Paragraph placeat quis fugiat provident veritatis quia
                                                    iure a debitis adipisci dignissimos consectetur magni quas
                                                    eius
                                                </li>
                                                <li>
                                                    adipisci dignissimos consectetur magni quas eius nobis
                                                    reprehenderit soluta eligendi
                                                </li>
                                                <li>
                                                    Veritatis tenetur odio delectus quibusdam officiis est.
                                                </li>
                                                <li>
                                                    Magni quas eius nobis reprehenderit soluta eligendi quo
                                                    reiciendis fugit? Veritatis tenetur odio delectus
                                                    quibusdam officiis est.
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    Paragraph placeat quis fugiat provident veritatis quia
                                                    iure a debitis adipisci dignissimos consectetur magni quas
                                                    eius
                                                </li>
                                                <li>
                                                    adipisci dignissimos consectetur magni quas eius nobis
                                                    reprehenderit soluta eligendi
                                                </li>
                                                <li>
                                                    Veritatis tenetur odio delectus quibusdam officiis est.
                                                </li>
                                                <li>
                                                    Magni quas eius nobis reprehenderit soluta eligendi quo
                                                    reiciendis fugit? Veritatis tenetur odio delectus
                                                    quibusdam officiis est.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className="fh5co-tab-content tab-content"
                                        data-tab-content={3}
                                    >
                                        <div className="col-md-10 col-md-offset-1">
                                            <h3>Happy Buyers</h3>
                                            <div className="feed">
                                                <div>
                                                    <blockquote>
                                                        <p>
                                                            Paragraph placeat quis fugiat provident veritatis quia
                                                            iure a debitis adipisci dignissimos consectetur magni
                                                            quas eius nobis reprehenderit soluta eligendi quo
                                                            reiciendis fugit? Veritatis tenetur odio delectus
                                                            quibusdam officiis est.
                                                        </p>
                                                    </blockquote>
                                                    <h3>— Louie Knight</h3>
                                                    <span className="rate">
                                                        <i className="icon-star2" />
                                                        <i className="icon-star2" />
                                                        <i className="icon-star2" />
                                                        <i className="icon-star2" />
                                                        <i className="icon-star2" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <blockquote>
                                                        <p>
                                                            Paragraph placeat quis fugiat provident veritatis quia
                                                            iure a debitis adipisci dignissimos consectetur magni
                                                            quas eius nobis reprehenderit soluta eligendi quo
                                                            reiciendis fugit? Veritatis tenetur odio delectus
                                                            quibusdam officiis est.
                                                        </p>
                                                    </blockquote>
                                                    <h3>— Joefrey Gwapo</h3>
                                                    <span className="rate">
                                                        <i className="icon-star2" />
                                                        <i className="icon-star2" />
                                                        <i className="icon-star2" />
                                                        <i className="icon-star2" />
                                                        <i className="icon-star2" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Detail;