import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import Recipes from './pages/Recipes';
import RootLayot from './pages/Root';
import ErrorPage from './pages/Error';
import RecipeDetailPage from './pages/RecipeDetail';
import r1 from './assets/recipes/r1.jpeg';
import r2 from './assets/recipes/r2.jpeg';
import r3 from './assets/recipes/r3.jpeg';

const RECIPES = [
  {
      id: 'r1',
      title: 'Healthier chicken chow mein',
      img: r1,
      short_description: 'Try this healthy version of the Chinese takeaway classic. In just 25 minutes you can feed the whole family a tasty healthy chicken dish that won"t disappoint!',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
      id: 'r2',
      title: 'One-pot healthy Mexican beef mince',
      img: r2,
      short_description: 'This quick and easy Mexican rice, capsicum and healthy beef mince dish topped with sour cream and avocado is the perfect weeknight dinner.',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
  },
  {
      id: 'r3',
      title: 'Mongolian chicken',
      img: r3,
      short_description: 'The classic Mongolian recipe gets a chicken twist in this easy one-pan dinner the whole family will love.',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable. '
  }
];

const router = createBrowserRouter([
  {path: '/', element: <RootLayot/>, errorElement: <ErrorPage/>,
  children: [
    {index: true, element: <HomePage/>},
    {path: 'recipes', element: <Recipes recipes_list={RECIPES}/>},
    {path: 'recipes/:recipeId', element: <RecipeDetailPage recipes_list={RECIPES}/>}
  ]}
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
