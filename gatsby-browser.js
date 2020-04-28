import React from 'react';

import { RecipeListProvider } from './src/context/recipeListContext';

export const wrapRootElement = ({ element }) => (
    <RecipeListProvider>{element}</RecipeListProvider>
);
