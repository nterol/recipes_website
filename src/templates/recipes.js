import React, { useCallback } from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../layout';
import styles from './recipe.module.scss';
import IngredientList from '../components/ingredient-list';
import {
    useDispatchRecipeList,
    useRecipeList,
} from '../context/recipeListContext';
import { addRecipe, removeRecipe } from '../context/actionTypes';

function Recipes({ data, pageContext }) {
    const {
        html,
        frontmatter: { rayons, title },
    } = data.markdownRemark;

    const { next, prev } = pageContext;

    console.log('🛒', rayons);

    const dispatchRecipeList = useDispatchRecipeList();
    const recipeList = useRecipeList();

    const isInCart = recipeList.includes(title);

    const dispatchRecipeMethod = useCallback(
        (type, title) => dispatchRecipeList({ type, payload: { title } }),
        [dispatchRecipeList]
    );

    const handleClickRecipe = () => {
        if (isInCart) {
            dispatchRecipeMethod(removeRecipe, title);
        } else {
            dispatchRecipeMethod(addRecipe, title);
        }
    };

    return (
        <Layout>
            <header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <h1>{title}</h1>
                <button
                    type="button"
                    style={{
                        borderRadius: '4px',
                        background: isInCart ? 'green' : 'white',
                        color: isInCart ? 'white' : 'black',
                        padding: '1rem',
                        fontFamily: 'avenir',
                    }}
                    onClick={handleClickRecipe}
                >
                    Add !
                </button>
            </header>
            <section className={styles.ingredientsContainer}>
                <h2 style={{ fontSize: '1.5rem' }}>
                    <span role="img" aria-label="liste d'ingrédients">
                        📝
                    </span>{' '}
                    Ingrédients :
                </h2>
                <IngredientList rayons={rayons} />
            </section>
            <section
                className={styles.recipeContainer}
                dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className={styles.navContainer}>
                {next && (
                    <button className={styles.navButton}>
                        <Link to={next}>&larr; Recette suivante </Link>
                    </button>
                )}
                {prev && (
                    <button className={styles.navButton}>
                        <Link to={prev}>Recette Précédente &rarr;</Link>
                    </button>
                )}
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
            html
            frontmatter {
                title
                rayons {
                    rayon
                    ingredients {
                        ingredient
                        quantity
                        unit
                    }
                }
            }
        }
    }
`;

export default Recipes;
