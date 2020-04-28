const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const recipePostTemplate = path.resolve('src/templates/recipes.js');
    return graphql(`
        query recipeTemplateQuery {
            allMarkdownRemark(
                sort: { order: ASC, fields: [frontmatter___date] }
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `).then(result => {
        const { edges: posts } = result.data.allMarkdownRemark;
        posts.forEach(({ node }, index) => {
            const { path } = node.frontmatter;
            return createPage({
                path,
                component: recipePostTemplate,
                context: {
                    pathSlug: path,
                    prev: index === 0 ? null : posts[index - 1].node.frontmatter.path,
                    next:
                        index === (posts.length - 1)
                            ? null
                            : posts[index + 1].node.frontmatter.path,
                },
            });
        });
    });
};


