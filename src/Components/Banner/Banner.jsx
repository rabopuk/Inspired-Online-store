import { useMedia } from 'react-use';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../Layout/Container/Container.jsx';
import style from './Banner.module.scss';
import { API_URL } from '../../const.js';

export const Banner = ({ data }) => {
  const isMobile = useMedia('(max-width: 540px)');
  const isTablet = useMedia('(max-width: 768px)');
  const isLaptop = useMedia('(max-width: 540px)');

  const [bgURL, setBgURL] = useState('');

  useEffect(() => {
    if (isMobile) {
      setBgURL(`${API_URL}${data?.bg.mobile}`);
    } else if (isTablet) {
      setBgURL(`${API_URL}${data?.bg.tablet}`);
    } else if (isLaptop) {
      setBgURL(`${API_URL}${data?.bg.laptop}`);
    } else {
      setBgURL(`${API_URL}${data?.bg.desktop}`);
    }
  }, [isMobile, isTablet, isLaptop, data]);

  return (
    data &&
    <section
      className={style.banner}
      style={{
        backgroundImage: `url(${bgURL})`
      }}
    >
      <Container>
        <div className={style.content}>
          <h2 className={style.title}>{data.description}</h2>
          <NavLink className={style.link} to={`/product/${data.id}`}>
            Перейти
          </NavLink>
        </div>
      </Container>
    </section>
  );
};