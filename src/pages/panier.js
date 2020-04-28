import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../layout';
import { useRecipeList } from '../context/recipeListContext';

function Panier() {
    const {
        allMarkdownRemark: { edges },
    } = useStaticQuery(graphql`
        query PanierQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            path
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
            }
        }
    `);

    const recipeList = useRecipeList();

    const selectedRecipes = recipeList.map(recipe => {
        return edges.filter(edge => edge.node.frontmatter.title === recipe);
    });

    console.log(selectedRecipes);

    return (
        <Layout>
            <h1>Panier !</h1>
        </Layout>
    );
}

export default Panier;
