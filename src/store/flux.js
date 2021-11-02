import { findAllByLabelText } from "@testing-library/dom";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlProducts: "https://5000-aquamarine-seahorse-y9ajx2ki.ws-us17.gitpod.io/api/products",     
            products: null,
            path: "images/",
            extension: ".jpg",
            list: [],
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
            }
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

export default getState;