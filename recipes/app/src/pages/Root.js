import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayot(){
    return <>
       <h1>Recipes</h1> 
       <MainNavigation/>
       <main><Outlet/></main>
    </>
}

export default RootLayot;