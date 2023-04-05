import { useRouteError } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';


function ErrorPage(){
    const error = useRouteError();

    let title = 'An error occured.';
    let message = 'Something went wrong.';

    if(error.status === 500){
        message = JSON.parse(error.data).message;
    }

    if(error.status === 400){
        title = 'Not found';
        message = 'Could not found resourse or page.';
    }

    return <>
        <MainNavigation/>
        <main>
            <h1>{title}</h1>
            <p>{message}</p>
        </main>
    </>
}

export default ErrorPage;


