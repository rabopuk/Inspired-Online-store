import { useSelector } from 'react-redux';
import style from './ColorList.module.scss';
import { Color } from './Color/Color.jsx';

export const ColorList = ({ colors }) => {
  const { colorList } = useSelector(state => state.color);

  return (
    <ul className={style.colorList}>
      {colors.map((id, i) => {
        const color = colorList.find(color => color.id === id);
        return <Color key={id} color={color?.code} check={!i} />;
      })}
    </ul>
  );
};