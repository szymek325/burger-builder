import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
        }
    }

    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}></Burger>
                <div>Build controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;