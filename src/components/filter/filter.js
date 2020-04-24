import React from 'react';
import './filter.css';
import { Button } from '../button/button';

export class Filter extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onClear = this.onClear.bind(this);
    }

    componentDidMount() {
        const { rating, category } = this.props;

        document.getElementById('rating').value = rating;
        document.getElementById('category').value = category;
    }

    onSubmit(e) {
        const { onSubmit } = this.props;

        const rating = document.getElementById('rating').value;
        const category = document.getElementById('category').value;

        onSubmit({
            rating,
            category
        });
    }

    onClear() {
        const { onClear } = this.props;

        document.getElementById('rating').value = "None";
        document.getElementById('category').value = "None";

        onClear();
    }

    render() {

        return (
            <div className="filter-conatiner">
                <div className="filter-heading-container">
                    <h3>Filter By</h3>
                    <span><Button btnTxt={`Clear Filters`} btnClick={this.onClear} /></span>
                </div>
                <div className="filter-item">
                    <div>Rating</div>
                    <div>
                        <select id="rating">
                            <option disabled selected value="None"> -- select rating -- </option>
                            <option value="1">greater than equal to 1</option>
                            <option value="2">greater than equal to 2</option>
                            <option value="3">greater than equal to 3</option>
                            <option value="4">greater than equal to 4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="filter-item">
                    <div>Category</div>
                    <div>
                        <select id="category">
                            <option disabled selected value="None"> -- select category -- </option>
                            <option value="veg">Veg</option>
                            <option value="nonVeg">Non Veg</option>
                        </select>
                    </div>
                </div>
                <div className="filter-item">
                    <Button btnTxt={`Submit`} btnClick={this.onSubmit} />
                </div>
            </div>
        );
    }
}