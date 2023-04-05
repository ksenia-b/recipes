import { json, redirect } from 'react-router-dom';
import EventForm from "../components/EventForm";

function RecipeNew(){
    return <>
        <h2>Adding new recipe page.</h2>
        <EventForm/>
    </>
}

export default RecipeNew;


export async function action({request, params}){
    const data = await request.formData();
    console.log("data = ", data);

    const eventData = {
        id: data.get('id'),
        title:   data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        short_description: data.get('short_description'),
        description: data.get('description')
    };

    
    const response = await fetch('https://recipes-365eb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });

    console.log("response = ", response);

    if(!response.ok){
        throw json({ message: 'Could not send event.' });
    }

return redirect('/recipes');

}