import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingrediantSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following details:</p>
            <ul>
                {ingrediantSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;