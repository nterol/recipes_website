import React from 'react';

import styles from './article.module.scss';
import { Link } from 'gatsby';
// import { useShoppingList } from "../../context/shoppingListContext";

const Article = ({ title, date, tags, excerpt, path, thumbnail }) => {
    const dateOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formatedDate = new Date(date).toLocaleDateString(
        undefined,
        dateOptions
    );

    // const shoppingList = useShoppingList();
    return (
        <article className={styles.article}>
            <header>
                {/* <Img alt={title} fluid={thumbnail.childImageSharp} /> */}
            </header>
            <main className={styles.container}>
                <Link to={path}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.time}>{formatedDate}</p>
                    <p>{excerpt}</p>
                </Link>
            </main>
            <div className={styles.tagContainer}>
                {tags.map(tag => (
                    <span key={`${title}-${tag}`} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
};

export default Article;
