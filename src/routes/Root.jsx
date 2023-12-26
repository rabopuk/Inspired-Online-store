import { Outlet } from 'react-router-dom';
import { Header } from '../Components/Header/Header.jsx';
import { Main } from '../Components/Layout/Main/Main.jsx';
import { Footer } from '../Components/Footer/Footer.jsx';

export const Root = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);