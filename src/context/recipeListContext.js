import React, { useContext, useReducer, createContext } from 'react';
import { addRecipe, removeRecipe } from './actionTypes';

const RecipeListContext = createContext(null);
const DispatchRecipeListContext = createContext(null);

function recipeListReducer(state, { type, payload }) {
    switch (type) {
        case addRecipe: {
            return [...state, payload.title];
        }
        case removeRecipe: {
            return state.filter(recipe => recipe !== payload.title);
        }
        default:
            return state;
    }
}

export function RecipeListProvider({ children }) {
    const [recipeList, dispatchRecipeList] = useReducer(recipeListReducer, []);

    return (
        <RecipeListContext.Provider value={recipeList}>
            <DispatchRecipeListContext.Provider value={dispatchRecipeList}>
                {children}
            </DispatchRecipeListContext.Provider>
        </RecipeListContext.Provider>
    );
}

export function useRecipeList() {
    const recipeList = useContext(RecipeListContext);
    if (recipeList === undefined) throw new Error('Recipe List is undefined');
    return recipeList;
}

export function useDispatchRecipeList() {
    const dispatchRecipeList = useContext(DispatchRecipeListContext);
    if (!dispatchRecipeList)
        throw new Error('Could not find dispatch Recipe list method');
    return dispatchRecipeList;
}
