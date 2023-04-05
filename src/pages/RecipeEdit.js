import { useRouteLoaderData, useNavigate } from 'react-router-dom';

import EventForm from '../components/EventForm';
import classes from './RecipeEdit.module.css';

function RecipeEdit(){
  
    const recipe = useRouteLoaderData('recipe-detail');

    console.log("RecipeEdit, event = ", recipe);
    return  <>
       <h1>Recipe edit</h1>
      <EventForm event={recipe}/>
    </>
  
}

export default RecipeEdit;