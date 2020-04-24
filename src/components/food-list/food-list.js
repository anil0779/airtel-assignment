
import React from 'react';
import { Food } from '../food/food';
import './food-list.css';

export class FoodList extends React.Component {

    render() {
        const { foodList } = this.props;

        const list = foodList && foodList.map((food) => {
            return (
                <Food {...food} />
            )
        });

        return (
            <div className="food-list-container">
                {list.length > 0 ? list : 'No Matching Food Items'}
            </div>
        );
    }
}