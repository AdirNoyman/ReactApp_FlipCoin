import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {

    render() {

        return <div><img src={this.props.image} alt={this.props.alt}></img></div>;
    }

}

export default Coin;