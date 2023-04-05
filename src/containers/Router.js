import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from '../pages/Home';
import RootLayot from '../pages/Root';
import ErrorPage from '../pages/Error';
import RecipeStats from '../pages/RecipeStats';
import RecipeDetailPage,  { loader as recipeDetailLoader,
action as deleteRecipeAction } from '../pages/RecipeDetail';
// import RecipeNavigation from './components/RecipeNavigation';
import RecipeRoot from '../pages/RecipeRoot';
import RecipeNew, { action as newRecipeAction } from '../pages/RecipeNew';
import RecipeEdit from '../pages/RecipeEdit';
import Recipes, { loader as recipeAllLoader } from '../pages/Recipes';


export const router = createBrowserRouter([
    { path: '/', element: <RootLayot/>, errorElement: <ErrorPage/>,
    children: [
      {
        index: true, element: <HomePage/>
      },
      {
        path: '/recipe-stats', element: <RecipeStats/>
      },
      {
        path: '/recipes', element: <RecipeRoot/>, 
        children: [
          {
            path: 'new', element: <RecipeNew/>, 
            action: newRecipeAction
          },
        {
          path: '', element: <Recipes/>, 
          id: 'recipes-all',
          loader: recipeAllLoader
        },
        {
          path: ':recipeId',
          id: 'recipe-detail',
          loader: recipeDetailLoader,
          children: [
            {
              index: true, element: <RecipeDetailPage/>,
              action: deleteRecipeAction
            },
            {
              path: 'edit', element: <RecipeEdit/>
            }
          ]
        }
      ]}
    ]
  }
  ])
;