import React from 'react';
import './button.css';

export class Button extends React.Component {

    constructor(props) {
        super(props);

        this.btnClickNative = this.btnClickNative.bind(this);
    }

    btnClickNative(event) {
        const { btnClick } = this.props;

        btnClick();
    }

    render() {
        const { btnTxt } = this.props;



        return (
            <button className="primary-btn" onClick={this.btnClickNative}>{btnTxt}</button>
        );
    }
}