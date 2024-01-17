import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './Main.module.scss';

export const Main = ({ children }) => {
  const { status } = useSelector(state => state.statusServer);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!status && location.pathname !== '/404') {
      navigate('/404');
    }
  }, [status, location, navigate]);

  return (
    <div className={style.main}>{children}</div>
  );
};