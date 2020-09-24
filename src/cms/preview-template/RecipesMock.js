import React from 'react';

const RecipesMock = () => (
    <>
<section className={styles.recipeHeader}>
                <h1 className={styles.recipeTitle}>{title}</h1>
                <div className={styles.imgContainer}>
                    {thumbnail && <Img alt={title} fluid={thumbnail.childImageSharp.fluid} />}
                    <button
                        type="button"
                        className={styles.favButton}
                        type="button"
                        onClick={handleClickRecipe}
                    >
                        {isInCart ? (
                            <FaStar size="3em" color="#ffafbd" />
                        ) : (
                            <FaRegStar size="3em" color="#ffafbd" />
                        )}
                    </button>
                </div>  
            </section>
            <section className={styles.paraRecipe}>
                <div className={styles.ingredientsContainer}>
                    <h2>Ingrédients</h2>
                    <IngredientList rayons={rayons} />
                </div>
            </section>
            <section
                className={styles.recipeContainer}
                dangerouslySetInnerHTML={{ __html: html }}
            />

            <div className={styles.navContainer}>
                <Link to="/">
                    <FiX size="5em" color="#ffafbd" />
                </Link>
            </div>
    </>
)