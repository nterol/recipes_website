import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../layout';
import Article from '../components/Article';
// import Image from "../components/image";
import SEO from '../components/seo';
import styles from '../components/page.module.scss';

export const query = graphql`
    query HomePageQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date
                        excerpt
                        tags
                    }
                }
            }
        }
    }
`;

const IndexPage = ({ data }) => {
    const { edges } = data.allMarkdownRemark;

    return (
        <Layout>
            <SEO title="Home" />
            <section className={styles.pageContent}>
                <div className={styles.grid}>
                    {edges.map(({ node: { frontmatter } }) => (
                         <Article key={frontmatter.title} {...frontmatter} />
                        
                    ))}
                </div>
            </section>
            {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    );
};

export default IndexPage;
