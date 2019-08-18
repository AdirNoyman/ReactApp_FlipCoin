import React, { Component } from 'react';
import Coin from './Coin';
import './Flipcoin.css';

class Flipcoin extends Component {

    static defaultProps = { heads: "https://images-na.ssl-images-amazon.com/images/I/51xs7F%2BtP5L._SX425_.jpg", tails: "https://i.ebayimg.com/images/g/xZEAAOSwXl9beYhX/s-l300.jpg" };

    constructor(props) {
        super(props);
        this.state = {
            headsCount: 0,
            tailsCount: 0,
            totalFlips: 0,
            coinImage: null
        };
        this.flipCoin = this.flipCoin.bind(this);

    }
    flipCoin() {

        let randNum = Math.floor(Math.random() * 2) + 1;
        console.log(randNum);
        if (randNum === 1) {

            this.setState(curState => { return { ...curState, coinImage: "heads", headsCount: curState.headsCount + 1, totalFlips: curState.totalFlips + 1 } });

        } else {

            this.setState(curState => { return { ...curState, coinImage: "tails", tailsCount: curState.tailsCount + 1, totalFlips: curState.totalFlips + 1 } });
        }

    }

    handelFlip(e) {

        this.flipCoin();
    }


    render() {

        let coinSide = this.state.coinImage;

        if (coinSide) {

            coinSide = this.state.coinImage === "heads" ? this.props.heads : this.props.tails;
        }

        return (

            <div>
                <h3>Let's Flip A Coin!</h3>
                <Coin image={coinSide} alt={this.state.coinImage} />
                <br></br>
                <button onClick={this.flipCoin}>Flip Meee!</button>
                <p>{`Out of ${this.state.totalFlips} flips, there have been ${this.state.headsCount} heads and ${this.state.tailsCount} tails.`}</p>
            </div>
        );

    }

}

export default Flipcoin;

