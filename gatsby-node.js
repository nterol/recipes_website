const path = require('path');

const createTagsPage = (createPage, posts) => {
    const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js');
    const singleTagIndexTemplte = path.resolve(
        'src/templates/singleTagIndex.js'
    );

    const postByTags = {};

    posts.forEach(({ node }) => {
        if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
                if (!postByTags[tag]) {
                    postByTags[tag] = [];
                }
                postByTags[tag].push(node);
            });
        }
    });

    const tags = Object.keys(postByTags);

    createPage({
        path: '/tags',
        component: allTagsIndexTemplate,
        context: { tags: tags.sort() },
    });
};

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

        createTagsPage(createPage, posts);
        posts.forEach(({ node }, index) => {
            const { path } = node.frontmatter;
            return createPage({
                path,
                component: recipePostTemplate,
                context: {
                    pathSlug: path,
                    prev:
                        index === 0
                            ? null
                            : posts[index - 1].node.frontmatter.path,
                    next:
                        index === posts.length - 1
                            ? null
                            : posts[index + 1].node.frontmatter.path,
                },
            });
        });
    });
};
