import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./views/Home";
import Products from "./views/Products";
import Detail from "./views/Detail";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import injectContext from './store/appContext';
import Maintenance from "./views/Maintenance";
import TableProducts from "./views/TableProducts";
import AddProducts from "./views/AddProducts";
import EditProducts from "./views/EditProducts";
import TableServices from "./views/TableServices";
import AddServices from "./views/AddServices";
import EditServices from "./views/EditServices";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/editservices" component={EditServices}></Route>
                <Route exact path="/addservices" component={AddServices}></Route>
                <Route exact path="/tableservices" component={TableServices}></Route>
                <Route exact path="/editproducts" component={EditProducts}></Route>
                <Route exact path="/addproducts" component={AddProducts}></Route>
                <Route exact path="/tableproducts" component={TableProducts}></Route>
                <Route exact path="/maintenance" component={Maintenance}></Route>
                <Route exact path="/detail" component={Detail}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/services" component={Services}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/products" component={Products}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route component={NotFound}></Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(App);