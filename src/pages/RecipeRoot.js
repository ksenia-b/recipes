import { Outlet } from 'react-router-dom';
import RecipeNavigation from '../components/RecipeNavigation';

function RecipeRoot(){
    return <>
    <h2>Recipe root</h2>
    <RecipeNavigation/>
    <Outlet/>
    </>
}

export default RecipeRoot;