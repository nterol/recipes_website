const React = require('react');

const { RecipeListProvider } = require('./src/context/recipeListContext');

exports.wrapRootElement = ({ element }) => (
    <RecipeListProvider>{element}</RecipeListProvider>
);
