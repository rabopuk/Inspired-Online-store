import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { CartPage } from './Components/CartPage/CartPage.jsx';
import { ErrorPage } from './Components/ErrorPage/ErrorPage.jsx';
import { FavoritePage } from './Components/FavoritePage/FavoritePage.jsx';
import { MainPage } from './Components/MainPage/MainPage.jsx';
import { ProductPage } from './Components/ProductPage/ProductPage.jsx';
import { SearchPage } from './Components/SearchPage/SearchPage.jsx';
import { fetchColors } from './features/colorSlice.js';
import { fetchNavigation } from './features/navigationSlice.js';
import { Root } from './routes/Root.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='/catalog/:gender/:category?' element={<MainPage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  }, [dispatch]);

  return <RouterProvider router={router}></RouterProvider>;
};