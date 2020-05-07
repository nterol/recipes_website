import React from 'react';

import styles from './ingredient-list.module.scss';

const IngredientList = ({ rayons }) => (
    <div className={styles.listContainer}>
        {rayons.map(({ rayon, ingredients }) => (
            <React.Fragment key={rayon}>
                <h3 className={styles.listTitle}>{rayon}</h3>
                {ingredients.map(({ ingredient, quantity, unit }) => (
                    <li key={ingredient}>{` ${quantity} ${
                        unit || ''
                    } ${ingredient}${quantity > 1 && !unit ? 's' : ''}`}</li>
                ))}
                <hr />
            </React.Fragment>
        ))}
    </div>
);

export default IngredientList;
