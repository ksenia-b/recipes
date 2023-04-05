import { Link, useNavigate } from 'react-router-dom';

function HomePage(){
    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/products');
    }

    return <>
    <h1>Home page</h1>
   <p>
    Hey! That is the home page.
    {/* <button onClick={navigateHandler}>Navigate</button> */}
   </p>
    </>

}

export default HomePage;