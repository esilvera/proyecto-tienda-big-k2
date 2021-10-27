import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./views/Home";
import Products from "./views/Products";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detail from "./views/Detail";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/detail" component={Detail}></Route>
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

export default App;