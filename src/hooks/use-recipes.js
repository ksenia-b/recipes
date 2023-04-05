import { useState, useEffect } from 'react';

const useRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      const fetchMeals = async() => {
       const response = await fetch('https://recipes-365eb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json');
        const responseData = await response.json();
        const loadedRecipes = [];
        
        for(const key in responseData){
          loadedRecipes.push({
            id: key,
            title: responseData[key].title,
            short_description: responseData[key].short_description,
            description: responseData[key].description,
            img: responseData[key].img
          })
        }
  
        setRecipes(loadedRecipes);
      };
  
      fetchMeals(recipes);
 
    }, []);

    return recipes;
}

export default useRecipes;