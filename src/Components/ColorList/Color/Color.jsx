import { useEffect, useRef } from 'react';
import cN from 'classnames';
import style from './Color.module.scss';

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
