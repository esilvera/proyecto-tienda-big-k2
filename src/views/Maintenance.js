import React, { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Context } from '../store/appContext';

const Maintenance = () => {

    const history = useHistory();
    const { store: { user }, actions } = useContext(Context);
    if (user === null) history.push('/login');
    if (!!user && user.user_role === false) history.push('/login');
    

    return (
        <nav className="fh5co-nav" role="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-xs-2">

                    </div>
                    <div className="col-md-6 col-xs-6 text-center">
                        <ul>
                            <li>
                                <Link to="/tableproducts">Table Products</Link>
                            </li>
                            <li>
                                <Link to="/tableservices">Table Services</Link>
                            </li>
                            <li>
                                <Link to="#">Table Products Type</Link>
                            </li>
                            <li>
                                <Link to="/">Exit (Back)</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-xs-4 text-right hidden-xs menu-2">

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Maintenance;