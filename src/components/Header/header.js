import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import c from 'classnames';

import styles from './header.module.scss';
// import { useRecipeList } from '../../context/recipeListContext';

const Burger = () => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <div
            onClick={() => setOpen(!isOpen)}
            className={c(styles.burger, { [styles.open]: isOpen })}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

const Header = ({ title, description }) => {
    // const recipeList = useRecipeList();

    return (
        <header className={styles.header}>
            <div style={{ display: 'flex', justifyContent:"space-between"}}>
                <h1 className={styles.title}>
                    <Link to="/">{title}</Link>
                </h1>
                <Burger />
            </div>

            <nav className={styles.navContainer}>
                <Link to="/panier">Mes courses</Link>
                <Link to="/tags">Tags</Link>
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
