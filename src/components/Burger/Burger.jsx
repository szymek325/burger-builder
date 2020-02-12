import React from 'react';
import BurgerIndgredient from './BurgerIngredient/BurgerIndgredient'
import classes from './Burger.module.css'

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIndgredient key={igKey + i} type={igKey} />
                })
        });
    return (
        <div className={classes.Burger}>
            <BurgerIndgredient type="bread-top"></BurgerIndgredient>
            {transformedIngredients}
            <BurgerIndgredient type="bread-bottom"></BurgerIndgredient>
        </div>
    );
};

export default Burger;