import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './header.module.scss';
// import { useRecipeList } from '../../context/recipeListContext';

const Header = ({ title, description }) => {
    // const recipeList = useRecipeList();

    return (
        <header className={styles.header} style={{ border: '1px solid blue' }}>
            <nav
                className={styles.headerContainer}
                style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}
            >
                <div>
                    <h1 className={styles.title}>
                        <Link to="/">{title}</Link>
                    </h1>
                    <h2 className={styles.subTitle}>{description}</h2>
                </div>
                <div style={{ border: '1px solid pink' }}>
                    <Link to="/panier">Mon panier</Link>
                </div>
            </nav>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
