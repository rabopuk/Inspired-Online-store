import { useEffect, useRef } from 'react';
import style from './Color.module.scss';
import cN from 'classnames';

export const Color = ({ color, check }) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty('--data-color', color);
  }, [color]);

  return (
    <li
      ref={colorRef}
      className={cN(style.color, check ? style.colorCheck : '')}
    />
  );
};
