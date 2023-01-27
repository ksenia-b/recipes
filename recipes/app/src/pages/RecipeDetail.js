import { prettyDOM } from '@testing-library/react';
import { Link, useParams } from 'react-router-dom';


function RecipeDetailPage(props){
    const params = useParams();
    const recipes = props.recipes_list;
    const current_recipe = recipes.find(obj => {
        return obj.id === params.recipeId;
      })
    return <>
        <h1>Recipe Details:</h1>
        <div>
        <p>
        {params.recipeId}
       </p>
       <div>
        <h2>
       {current_recipe['title']}
        </h2>
        <img className='img-details' src={current_recipe['img']}></img>
        <p> {current_recipe['description']}</p>
       </div>
       <p>
            <Link to=".." relative='path'>Back</Link>
       </p>
        </div>
     
    </>
}

export default RecipeDetailPage;