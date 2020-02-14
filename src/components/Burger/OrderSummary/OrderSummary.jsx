import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    //this could be functional component, kept for debug
    componentWillUpdate() {
        console.log('[OrderSummary] Will Update')
    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)} $</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.cancelClicked} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.continueClicked} btnType="Success">CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;