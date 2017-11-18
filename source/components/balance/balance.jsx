/* jshint esversion: 6 */

import React from 'react'
import ReactDOM from 'react-dom'

require('./balance.scss');

export class Balance extends React.Component {

    constructor(props) {
        super(props);
        this.state = { balance: 10000 };
        this.calculateBalance = this.calculateBalance.bind(this);
    }

    calculateBalance() {
        var costs = 0;

        checks.reduce(function(previousCheck, currentCheck) {
            currentCheck.items.reduce(function(previousItem, currentItem) {
                return costs = costs + currentItem.price;
            }, 0);
        }, 0);

        return (this.state.balance - costs).toFixed(0);
    }

    componentDidMount() {
        this.setState({ balance: this.calculateBalance() })
    }

    render() {
        return (
            <span className="balance__sum">
                { this.state.balance } ₽
            </span>
        );
    }
}


ReactDOM.render(
    <Balance checks = { checks } />,
    document.getElementById('balance')
);
