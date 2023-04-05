import  { Link, useRouteLoaderData } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

// import getRecipes from '../hooks/use-recipes';
// import r1 from './assets/recipes/r1.jpeg';
// import r2 from './assets/recipes/r2.jpeg';
// import r3 from './assets/recipes/r3.jpeg';
function Recipes(props){
    // const recipes = props.recipes_list;
    // const recipes = getRecipes();
    const recipes = [];

    const responseData = useRouteLoaderData('recipes-all');
 
    for(const key in responseData){
        recipes.push({
        id: key,
        title: responseData[key].title,
        short_description: responseData[key].short_description,
        description: responseData[key].description,
        img: responseData[key].img
      })
    }

    console.log("dsf srecipes = ", responseData);
    
    return <>
    <h2>Recipes all.</h2>
    <div className="images-layout">
    <h1>The recipes page</h1>
    <ul>
    {recipes.map(recipe => 
    <Box
        border={'1px solid #90a4ae'}
        color={'black'}
        bgColor={'#e5e7e68f'}
        borderColor={'tomato.200'}
        overflow={'hidden'}
        borderRadius={8}
    >
       <li className='food-list' key={recipe.title}>
       <div className='food-img-block'>  
            <img src={`${recipe.img}`}/>
            <Link to={recipe.id}>{ recipe.title }</Link>
            <p>{recipe.short_description}</p>  
        </div> 
       </li>
    </Box>
       )}
    </ul> 
    </div>
    </>
}

export default Recipes;


export async function loader(){
   
    const response = await fetch(
        'https://recipes-365eb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
    );
    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not fetch events.',
    status: 500}));
    } else {
       return response;

    }
}