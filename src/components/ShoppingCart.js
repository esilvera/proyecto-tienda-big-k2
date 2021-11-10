import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const ShoppingCart = () => {

    const { store: { list }, actions: {deleteShopCart}} = useContext(Context);

    return (
        <>
            {list.length > 0 &&
                list.map((newFavorite, index) => {
                    return (
                        <li
                            key={index} // Elemento unico para React
                            className="dropdown-item d-flex justify-content-between text-white s-text bg-black"
                            id={index}>
                            {newFavorite.favorite}
                            <button
                                type="button"
                                className="d-flex float-end"
                                onClick={() =>
                                    deleteShopCart(index)
                                }><i className="icon-trash"></i></button>
                        </li>
                    );
                })}

        </>
    );
};

export default ShoppingCart;