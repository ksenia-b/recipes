import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import Recipes from './pages/Recipes';
import RootLayot from './pages/Root';

const router = createBrowserRouter([
  {path: '/', element: <RootLayot/>,
children: [
  {path: '/', element: <HomePage/>},
  {path: '/recipes', element: <Recipes/>}
]}
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
