import React from 'react';
import { Button } from '../button/button';
import './search.css';

export class Search extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        // save the search text on component mount
        document.getElementById('search-food').value = this.props.searchText;
    }

    onSubmit(e) {
        const { onSearch } = this.props;

        const searchText = document.getElementById('search-food').value;
        onSearch(searchText);
    }

    render() {

        return (
            <div className="search-container">
                <h3>Search By Name</h3>
                <div className="search-btn-wrapper">
                    <input type={Text} className="search-box" id="search-food" />
                    <Button btnTxt={`Submit`} btnClick={this.onSubmit} />
                </div>
            </div>
        );
    }
}