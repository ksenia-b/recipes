import { prettyDOM } from '@testing-library/react';
import { useLoaderData, useRouteLoaderData, json, redirect, useSubmit } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import classes from './RecipeDetail.module.css';

function RecipeDetailPage(props){
    const params = useParams();
//     const recipes = props.recipes_list;
    //  const responseData = useLoaderData();
    const responseData = useRouteLoaderData('recipe-detail');
    console.log("responseData in Recipe Detail page = ", responseData)

    const submit = useSubmit();

    function startDeleteHandler() {
     const proceed =  window.confirm('Are you sure?');
  
      if(proceed){
        submit(null, {method: 'delete' 
      });
      }
    }

    return <>
        <h1>Recipe Details:</h1>
        <br/>
        <div>
            <div className={classes.recipe}>
                    <h2>
                        {responseData['title']}
                    </h2>
                    <img className='img-details' src={responseData['img']}></img>
                    <p> {responseData['description']}</p>
                    <menu className={classes.actions}>
                        <Link to="edit">Edit</Link>
                        <button onClick={startDeleteHandler}>Delete</button>
                    </menu>
            </div>
            <p>
                    <Link to=".." relative='path'>Back</Link>
            </p>
        </div>
       
    </>
}

export default RecipeDetailPage;

export async function loader({request, params}){
    console.log("params = ", params)
    const id = params.recipeId;

     const response = await fetch(
         'https://recipes-365eb-default-rtdb.europe-west1.firebasedatabase.app/recipes/'+id+'/.json'
     );
     console.log("response in recipe details = ", response);

     if (!response.ok) {
         throw new Response(JSON.stringify({message: 'Could not fetch events.',
        status: 500}));
     } else {
         return response;
 
     }

     
 }


 export async function action({params, request}){
    const id = params.recipeId;

    const response = await fetch(
        'https://recipes-365eb-default-rtdb.europe-west1.firebasedatabase.app/recipes/'+id+'/.json', 
    {
        method: request.method
    }
    );

    if(!response.ok){
        throw json({
            message: 'Could not delete recipe.'
        },
        {
            status: 500
        })
    }

    return redirect('/recipes');
}