import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return <header className={classes.header}>
        <nav className={classes.menu}>
            <ul>
                <li><NavLink to="/" 
                className={({isActive}) => 
            isActive ? classes.active : undefined }
           end >Home</NavLink></li>

                <li><NavLink to="/recipes"
                  className={({isActive}) => 
                  isActive ? classes.active : undefined }
                >Recipes</NavLink></li>

                 <li><NavLink to="/recipe-stats"
                  className={({isActive}) => 
                  isActive ? classes.active : undefined }
                >Recipe Stats</NavLink></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;