import React from 'react';
import './food.css';
import { Button } from '../button/button';

export class Food extends React.Component {

    constructor(props) {
        super(props);

        this.onOrder = this.onOrder.bind(this);
    }

    onOrder() {
        alert("Your order will be delivered in 30 minutes");
    }

    render() {
        const {
            displayName,
            ingredients,
            category,
            price,
            discountPrice,
            // currency,
            thumbnail,
            rating
        } = this.props;

        const ingredientsList = ingredients && ingredients.join(", ");
        const currency = <span>&#8377;</span> // should come from api 
        const imgSrc = category === 'veg' ? require("../../icons/veg.png") : require("../../icons/nonVeg.png");

        return (
            <div className={'food-container'}>
                <div className="food-name">
                    <span className="food-name-with-category">
                        <img src={imgSrc} alt={category} height={20}></img>
                        <h3>{displayName}</h3>
                    </span>
                    <span className="rating-container">{rating}&#9734;</span></div>
                <div className="ingredients">{ingredientsList}</div>
                <div className="price">
                    <div><span>{currency}</span>{price}</div>
                    <div><Button btnTxt={'ORDER'} btnClick={this.onOrder} /></div>
                </div>
            </div>
        );
    }
}