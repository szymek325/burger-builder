import React from 'react';
import BurgerIndgredient from './BurgerIngredient/BurgerIndgredient'
import classes from './Burger.module.css'

const Burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIndgredient type="bread-top"></BurgerIndgredient>
            <BurgerIndgredient type="cheese"></BurgerIndgredient>
            <BurgerIndgredient type="meat"></BurgerIndgredient>
            <BurgerIndgredient type="bread-bottom"></BurgerIndgredient>
        </div>
    );
};

export default Burger;