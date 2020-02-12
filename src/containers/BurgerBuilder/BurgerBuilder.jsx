import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
        },
        totalPrice: 4
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;

        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount

        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = oldPrice + priceAddition;

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
    }

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldPrice = this.state.totalPrice;

        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount

            const priceChange = INGREDIENT_PRICES[type];
            const newPrice = oldPrice - priceChange;

            this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
        }
    }



    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}></Burger>
                <div>Build controls</div>
                <BuildControls
                    ingredientAdded={this.addIngridientHandler}
                    ingredientRemoved={this.removeIngridientHandler}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;