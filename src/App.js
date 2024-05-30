import HomePage from './pages/home';
import Root from './components/Root/Root';
import PostPage from './pages/PostPage';

// Add react-router-dom imports
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// create router with JSX Route elements
const appRouter = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route path='/' element={<HomePage/>} />
    <Route path='/:id' element={<PostPage/>} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;