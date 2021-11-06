import { findAllByLabelText } from "@testing-library/dom";
//import { withRouter } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlProducts: "https://5000-aquamarine-seahorse-y9ajx2ki.ws-us18.gitpod.io/api/products",
            urlRegister: "https://5000-aquamarine-seahorse-y9ajx2ki.ws-us18.gitpod.io/api/register",
            urlLogin: "https://5000-aquamarine-seahorse-y9ajx2ki.ws-us18.gitpod.io/api/login",
            products: null,
            path: "images/",
            extension: ".jpg",
            list: [],
            fname: "",
            lname: "",
            email: "",
            password: "",
            huboError: false,
            error: "",
            exregvalidaname: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,20}$/,
            exregvalidaemail: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,

        },
        actions: {
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
                        console.log("data products tiene:", data)
                        setStore({
                            products: data
                        })
                    })
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
                const { createUser } = getActions();

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
                        console.log("data tiene: ", data);
                        const { msg } = data;
                        if (msg !== undefined) {
                            setStore({
                                huboError: true,
                                error: msg,
                            })
                            return
                        }
                        //let { newRegister } = register;
                        //newRegister.push(data);
                        //register(newRegister);

                        setStore({
                            fname: "",
                            lname: "",
                            email: "",
                            password: "",
                            huboError: false,
                        })
                    })
            },
            loginSubmit: (evento) => {
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
                        console.log("data tiene: ", data);

                        const { msg } = data;
                        if (msg !== undefined) {
                            setStore({
                                huboError: true,
                                error: msg,
                            })
                            return
                        }
                        //let { newLogin } = register;
                        //newLogin.push(data);
                        //register(newLogin);

                        setStore({
                            email: "",
                            password: "",
                            huboError: false,
                        })
                    })
            },

            /* postApiProducts: () => {
                const { urlProducts } = getStore();
                fetch(urlProducts, {
                    method: 'POST',
                    body: JSON.stringify(data),
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
            } */
            /* addShoppingCard: (name) => {
                const { list } = getStore();
                                
                const found = list.find(element => element.favorite === name);
                if (found) return;
                    let newFavorite = {
                        id: list.length > 0 ? list[list.length - 1].id + 1 : 1,
                        favorite: name
                    };
                    let newList = [...list]; 
                    newList.push(newFavorite);
                    
                    setStore({
                        list: newList,
                    })
            },
            foundShoppingCard: (name, list) => {
                console.log("name en fondFavorite tiene : ", name)
                console.log("list tiene: ", list)
                const found = list.find(element => element.favorite === name);
                console.log(found)
                if (!found) {
                   return true;
                }
                return false;
            },
            deleteShoppingCard: (evento) => {
                const { list } = getStore();
                let newList = [...list];
                newList.splice(evento, 1);
                //setList(newList);
                setStore({
                    list: newList
                })
            }*/
        }
    }
}

//export default withRouter(getState);
export default getState;