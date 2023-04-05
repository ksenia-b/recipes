import { Link } from 'react-router-dom';

import classes from './RecipeNavigation.module.css';

function RecipeNavigation(){
    return <>
    <header className={classes.header}>
        <nav>
        <ul className={classes.list}>
            <li><Link to="/recipes">All recipes</Link></li>
            <li><Link to="new">Add new recipe</Link></li>
        </ul>
        </nav>
   
    </header>
       </>
}

export default RecipeNavigation;