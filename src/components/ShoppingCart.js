import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const ShoppingCart = () => {

    const { store: { list }, actions: { deleteShopCart } } = useContext(Context);

    return (
        <>
            <div className="col-md-10 right">
                {list.length > 0 &&
                    list.map((newFavorite, index) => {
                        return (
                            <li
                                key={index} // Elemento unico para React
                                /* className="espacio" */
                                id={index}>
                                {newFavorite.favorite}
                                <button
                                    type="button"
                                    className="espacio"
                                    onClick={() =>
                                        deleteShopCart(index)
                                    }><i className="icon-trash"></i></button>
                            </li>
                        );
                    })}
            </div>
        </>
    );
};

export default ShoppingCart;