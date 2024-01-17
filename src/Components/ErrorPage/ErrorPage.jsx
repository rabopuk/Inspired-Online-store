import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useRouteError } from "react-router-dom";
import { fetchColors } from "../../features/colorSlice.js";
import { fetchNavigation } from "../../features/navigationSlice.js";
import style from './ErrorPage.module.scss';

export const ErrorPage = () => {
  const dispatch = useDispatch();
  const routeError = useRouteError();
  const { status } = useSelector(state => state.statusServer);
  const location = useLocation();
  const navigate = useNavigate();
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (status && location.pathname === '/404') {
      navigate('/');
    }
  }, [status, location, navigate]);

  useEffect(() => {
    if (!status && location.pathname === '/404') {
      clearInterval(timerIdRef.current);

      timerIdRef.current = setInterval(() => {
        dispatch(fetchColors());
        dispatch(fetchNavigation());
      }, 3000);
    }

    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [status, location, dispatch]);

  return (
    <div className={style.error}>
      <h2 className={style.title}>Произошла ошибка, попробуйте зайти позже</h2>
      <p className={style.message}>{routeError?.message ?? 'Неизвестная ошибка'}</p>
    </div>
  );
};