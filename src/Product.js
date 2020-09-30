import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';


function Product({ id, title, image, price, rating }) {

    const { dispatch } = useStateValue();

    console.log({ dispatch }) ;


    /* Issue - Dispatch is undefined
    
        
    
    
    */




    // console.log("basket", basket);

    const addToBasket = () => {

        //dispatch item to data layer
        dispatch ({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image 
            }

        })

    }



    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array({rating})
                            .fill()
                            .map((_, index) => (
                                <p><span>⭐</span></p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
