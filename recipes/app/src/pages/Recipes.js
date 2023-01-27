import { Link } from 'react-router-dom';

function Recipes(props){
    const recipes = props.recipes_list;
    console.log("recipe.img = ", recipes[0].img);


    return <>
    <h1>The recipes page</h1>
    <ul>
    {recipes.map(recipe => 
       
       <li className='food-list' key={recipe.recipeId}>
       
       
       <Link to={recipe.id}>{ recipe.title }</Link>
       <div className='food-img'>  
       <img src={recipe.img}></img>
        </div>
           
       </li>)}
       
        {/* <li><Link to="recipe-2">Recipe 2</Link></li> */}
    </ul>
    </>
}

export default Recipes;