import React from 'react';
import PropTypes from 'prop-types';


import './css/layout.css';
import Header from '../components/Header/header';
import styles from './layout.module.scss';
// import Navbar from '../components/Navbar/navbar';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);
    console.log(data);
    return (
        <>  
            <Header  {...data.site.siteMetadata} />
            <div className={styles.layoutContainer}>
                <main>{children}</main>
                {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
