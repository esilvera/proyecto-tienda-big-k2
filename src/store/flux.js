import { findAllByLabelText } from "@testing-library/dom";
import EditProducts from "../views/EditProducts";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlProducts: "https://5000-aquamarine-seahorse-y9ajx2ki.ws-us18.gitpod.io/api/products",
            urlServices: "https://5000-aquamarine-seahorse-y9ajx2ki.ws-us18.gitpod.io/api/services",
            urlRegister: "https://5000-aquamarine-seahorse-y9ajx2ki.ws-us18.gitpod.io/api/register",
            urlLogin: "https://5000-aquamarine-seahorse-y9ajx2ki.ws-us18.gitpod.io/api/login",
            urlShopCart: "https://5000-aquamarine-seahorse-y9ajx2ki.ws-us18.gitpod.io/api/shopping_card",
            products: null,
            services: null,
            path: "images/",
            extension: ".jpg",
            list: [],
            prod_id: "",
            prod_name: "",
            prod_desc: "",
            prod_brand: "",
            prod_price: 0,
            prod_type_id: 0,
            service_id: "",
            service_name: "",
            service_desc: "",
            service_icon: "",
            user_fname: "",
            user_lname: "",
            user_email: "",
            user_password: "",
            huboError: false,
            error: "",
            user: null,
            exregvalidaname: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,20}$/,
            exregvalidatelong: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,50}$/,
            exregvalidaemail: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,

        },
        actions: {
            clearProducts: () => {
                setStore({
                    prod_name: "",
                    prod_desc: "",
                    prod_brand: "",
                    prod_price: 0,
                    prod_type_id: 0,
                    huboError: false,
                })
            },
            getApiProducts: () => {
                const { urlProducts } = getStore();
                fetch(urlProducts, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            products: data
                        })
                    })
            },
            addApiProducts: (evento) => {
                evento.preventDefault()
                const { prod_name, prod_desc, prod_brand, prod_price, prod_type_id, exregvalidatelong } = getStore();

                if (prod_name === '' || !exregvalidatelong.test(prod_name)) {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque nombre del producto',
                    })
                    return
                }
                if (prod_brand === '') {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque marca del producto',
                    })
                    return
                }
                if (prod_desc === '') {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque descripción del producto',
                    })
                    return
                }
                if (prod_price === 0) {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque precio del producto',
                    })
                    return
                }
                if (prod_type_id === 0) {
                    setStore({
                        huboError: true,
                        error: 'Por Favor ID type del producto',
                    })
                    return
                }
                let register = {
                    product_name: prod_name,
                    product_desc: prod_desc,
                    product_brand: prod_brand,
                    product_price: prod_price,
                    product_type_id: prod_type_id,

                }
                const { urlProducts } = getStore();
                const { getApiProducts, clearProducts } = getActions();
                fetch(urlProducts, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(register)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        const { msg } = data;
                        if (msg !== undefined) {
                            setStore({
                                huboError: true,
                                error: msg,
                            })
                            return
                        }
                        clearProducts();
                        getApiProducts();
                    })
            },
            selectProduct: (product_id) => {
                const { urlProducts } = getStore();
                const { getApiProducts } = getActions();
                fetch(urlProducts + "/" + product_id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            prod_id: data.product_id,
                            prod_name: data.product_name,
                            prod_desc: data.product_desc,
                            prod_brand: data.product_brand,
                            prod_price: data.product_price,
                            prod_type_name: data.product_type_name,
                        })
                        getApiProducts();
                    })
            },
            putApiProducts: (evento) => {
                evento.preventDefault()
                const { prod_id, prod_name, prod_desc, prod_brand, prod_price, prod_type_id, exregvalidatelong } = getStore();

                if (prod_name === '' || !exregvalidatelong.test(prod_name)) {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque nombre del producto',
                    })
                    return
                }
                if (prod_brand === '') {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque marca del producto',
                    })
                    return
                }
                if (prod_desc === '') {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque descripción del producto',
                    })
                    return
                }
                if (prod_price === 0 || prod_price === '') {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque precio del producto',
                    })
                    return
                }
                if (prod_type_id === 0 || prod_type_id === '') {
                    setStore({
                        huboError: true,
                        error: 'Por Favor ID type del producto',
                    })
                    return
                }
                let register = {
                    product_name: prod_name,
                    product_desc: prod_desc,
                    product_brand: prod_brand,
                    product_price: prod_price,
                    product_type_id: prod_type_id,

                }
                const { urlProducts } = getStore();
                const { getApiProducts, clearProducts } = getActions();
                fetch(urlProducts + "/" + prod_id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(register)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        const { msg } = data;
                        if (msg !== undefined) {
                            setStore({
                                huboError: true,
                                error: msg,
                            })
                            return
                        }
                        clearProducts();
                        getApiProducts();
                    })
            },
            deleteApiProducts: (evento) => {
                const { urlProducts } = getStore();
                const { getApiProducts } = getActions();
                const { product_id } = evento
                fetch(urlProducts + "/" + product_id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        getApiProducts();
                    })
            },
            getApiServices: () => {
                const { urlServices } = getStore();
                fetch(urlServices, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            services: data
                        })
                    })
            },
            addApiServices: (evento) => {
                evento.preventDefault()
                const { service_name, service_desc, service_icon, exregvalidatelong } = getStore();
                if (service_name === '' || !exregvalidatelong.test(service_name)) {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque nombre del servicio',
                    })
                    return
                }
                if (service_desc === '') {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque descripción del servicio',
                    })
                    return
                }
                let register = {
                    service_name: service_name,
                    service_desc: service_desc,
                    service_icon: service_icon,
                }
                const { urlServices } = getStore();
                const { getApiServices } = getActions();
                fetch(urlServices, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(register)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        const { msg } = data;
                        if (msg !== undefined) {
                            setStore({
                                huboError: true,
                                error: msg,
                            })
                            return
                        }
                        setStore({
                            service_name: "",
                            service_desc: "",
                            huboError: false,
                        })
                        getApiServices()
                    })
            },
            selectService: (service_id) => {
                const { urlServices } = getStore();
                const { getApiServices } = getActions();
                fetch(urlServices + "/" + service_id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            service_id: data.service_id,
                            service_name: data.service_name,
                            service_desc: data.service_desc,
                            service_icon: data.service_icon,
                        })
                        getApiServices()
                    })
            },
            putApiServices: (evento) => {
                evento.preventDefault()
                const { service_id, service_name, service_desc, service_icon, exregvalidatelong } = getStore();

                if (service_name === '' || !exregvalidatelong.test(service_name)) {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque nombre del servicio',
                    })
                    return
                }
                if (service_desc === '') {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque descripción del servicio',
                    })
                    return
                }
                let register = {
                    service_name: service_name,
                    service_desc: service_desc,
                    service_icon: service_icon,
                }                
                const { urlServices } = getStore();
                const { getApiServices } = getActions();
                fetch(urlServices + "/" + service_id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(register)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        const { msg } = data;
                        if (msg !== undefined) {
                            setStore({
                                huboError: true,
                                error: msg,
                            })
                            return
                        }
                        setStore({
                            service_name: "",
                            service_desc: "",
                            huboError: false,
                        })
                        getApiServices()
                    })
            },
            deleteApiServices: (evento) => {
                const { urlServices } = getStore();
                const { getApiServices } = getActions();
                const { service_id } = evento
                console.log(urlServices + "/" + service_id)
                fetch(urlServices + "/" + service_id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        getApiServices()
                    })
            },
            shoppingCart: (evento) => {
                const { list } = getStore();
            },
            handleChange: evento => {
                const { name, value } = evento.target;
                setStore({
                    [name]: value
                })
            },
            registerSubmit: (evento) => {
                evento.preventDefault()
                const { fname, lname, email, password, exregvalidaname, exregvalidaemail } = getStore();

                if (fname === '' || !exregvalidaname.test(fname)) {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque su Nombre.',
                    })
                    return
                }
                if (lname === '' || !exregvalidaname.test(lname)) {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque su Apellido.',
                    })
                    return
                }
                if (email === '' || !exregvalidaemail.test(email)) {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque un Email válido.',
                    })
                    return
                }
                if (password === '' || (password.length) < 8) {
                    setStore({
                        huboError: true,
                        error: 'El password no puede estar vacio / minimo 8 Caracteres y/o Numeros',
                    })
                    return
                }
                let register = {
                    user_name: fname,
                    user_lname: lname,
                    user_email: email,
                    user_password: password,

                }
                const { urlRegister } = getStore();
                fetch(urlRegister, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(register)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        const { msg } = data;
                        if (msg !== undefined) {
                            setStore({
                                huboError: true,
                                error: msg,
                            })
                            return
                        }
                        setStore({
                            fname: "",
                            lname: "",
                            email: "",
                            password: "",
                            huboError: false,
                        })
                    })
            },
            loginSubmit: (evento, history) => {
                evento.preventDefault()
                const { email, password, exregvalidaemail } = getStore();
                if (email === '' || !exregvalidaemail.test(email)) {
                    setStore({
                        huboError: true,
                        error: 'Por Favor coloque un Email válido.',
                    })
                    return
                }
                if (password === '' || (password.length) < 8) {
                    setStore({
                        huboError: true,
                        error: 'El password no puede estar vacio / minimo 8 Caracteres y/o Numeros',
                    })
                    return
                }
                let register = {
                    user_email: email,
                    user_password: password,
                }
                const { urlLogin } = getStore();
                fetch(urlLogin, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(register)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        const { msg, user } = data;
                        if (msg !== undefined) {
                            setStore({
                                huboError: true,
                                error: msg,
                            })
                            return
                        }
                        setStore({
                            email: "",
                            password: "",
                            huboError: false,
                        })
                        if (user.user_role === false) {
                            setStore({
                                huboError: true,
                                error: "Usuario NO AUTORIZADO"
                            })
                            return
                        } else {
                            setStore({
                                user: user
                            })
                            sessionStorage.setItem('user', JSON.stringify(user))
                            history.push('/maintenance')
                        }

                    })
            },
            checkDataUser: () => {
                if (sessionStorage.getItem('user')) {
                    setStore({
                        user: JSON.parse(sessionStorage.getItem('user'))
                    })
                }
            },
            addShoppingCart: (list, name) => {
                //const { list } = getStore();
                console.log("list shopping card: ", list)
                let newFavorite = {
                    id: list.length > 0 ? list[list.length - 1].id + 1 : 1,
                    favorite: name
                }
                let newList = [...list];
                newList.push(newFavorite);

                setStore({
                    list: newList,
                })
            },
            deleteShopCart: (evento) => {
                const { list } = getStore();
                let newList = [...list];
                newList.splice(evento, 1);
                //setList(newList);
                setStore({
                    list: newList
                })
            },
        }
    }
}

export default getState;