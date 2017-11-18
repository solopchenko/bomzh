/* jshint esversion: 6 */

import React from 'react'
import ReactDOM from 'react-dom'

require('./check.scss');


export class Check extends React.Component {

    constructor(props) {
        super(props);
        this.state = { total: 0 };
        this.calculateTotal = this.calculateTotal.bind(this);
    }

    calculateTotal() {
        var total = 0;
        this.props.check.items.reduce(function(previousValue, currentValue) {
            return total = total + currentValue.price;
        }, 0);

        return total.toFixed(2);
    }

    componentDidMount() {
        this.setState({ total: this.calculateTotal() })
    }

    render() {
        return (
            <div className="check">
                <div className="check-header">
                    <div className="item item--without-margin">
                        <div className="item__header-date">{ this.props.check.date }</div>
                    </div>
                    <div className="item item--without-margin">
                        <div className="item__header-location">{ this.props.check.location }</div>
                    </div>
                </div>
                <div className="check-body">
                {
                    this.props.check.items.map(function(item, index) {
                        return (
                            <div className="item" key = { index }>
                                <div className="item__name">{ item.name }</div>
                                <div className="item__amount">{ item.amount.toFixed(3) }</div>
                                <div className="item__price">{ item.price.toFixed(2) } ₽</div>
                            </div>
                        );
                    })
                }
                </div>
                <div className="check-total">
                    <div className="item">
                        <div className="item__total-text">Итого:</div>
                        <div className="item__total-sum">{ this.state.total } ₽</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default class SectionChecks extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.checks.length > 0) {
            return (
                <div>
                    {
                        this.props.checks.map(function(check, index) {
                            return (
                                <Check check = { check } key = { index } />
                            );
                        })
                    }
                </div>
            );
        }
        else {
            return(
                <div className="check">
                    <div className="check-message">Нет трат</div>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <SectionChecks checks = { checks } />,
    document.getElementById('checks')
);
