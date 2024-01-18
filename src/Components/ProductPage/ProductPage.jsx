import cN from 'classnames';
import { ErrorMessage, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../const.js';
import { addToCart } from '../../features/cartSlice.js';
import { fetchCategory } from '../../features/goodsSlice.js';
import { fetchProduct } from '../../features/productSlice.js';
import { BtnLike } from '../BtnLike/BtnLike.jsx';
import { ColorList } from '../ColorList/ColorList.jsx';
import { Count } from '../Count/Count.jsx';
import { Goods } from '../Goods/Goods.jsx';
import { Container } from '../Layout/Container/Container.jsx';
import style from './ProductPage.module.scss';
import { ProductSize } from './ProductSize/ProductSize.jsx';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector(state => state.product);
  const { gender, category, colors } = product;
  const { colorList } = useSelector(state => state.color);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [count, setCount] = useState(1);

  const handleColorChange = (e, formik) => {
    setSelectedColor(e.target.value);
    formik.setFieldValue('color', e.target.value);
  };

  const handleSizeChange = (e, formik) => {
    setSelectedSize(e.target.value);
    formik.setFieldValue('size', e.target.value);
  };

  const handleDecrement = (formik) => {
    if (count > 1) {
      setCount(count - 1);
      formik.setFieldValue('count', count - 1);
    }
  };

  const handleIncrement = (formik) => {
    setCount(count + 1);
    formik.setFieldValue('count', count + 1);
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchCategory({ gender, category, count: 4, top: true, exclude: id }))
  }, [gender, category, id, dispatch]);

  useEffect(() => {
    if (colorList?.length && colors?.length) {
      setSelectedColor(colorList.find(color => color.id === colors[0]).title);
    }
  }, [colorList, colors]);

  const initialValues = {
    color: selectedColor,
    size: selectedSize,
    count: 1,
  };

  const validate = values => {
    const errors = {};

    if (!values.size) {
      errors.size = 'Пожалуйста, выберите размер товара.';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(addToCart({
      id,
      color: values.color,
      size: values.size,
      count: values.count,
    }));

    setSubmitting(false);
  };

  return (
    <>
      <section className={style.card}>
        <Container className={style.container}>
          <img
            className={style.image}
            src={`${API_URL}${product.pic}`}
            alt={`${product.title} ${product.description}`}
          />

          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form className={style.content}>
                <h2 className={style.title}>{product.title}</h2>
                <p className={style.price}>руб {product.price}</p>

                <div className={style.vendorCode}>
                  <span className={style.subtitle}>Артикул</span>
                  <span className={style.id}>{product.id}</span>
                </div>

                <div className={style.color}>
                  <p className={cN(style.subtitle, style.colorTitle)}>Цвет</p>
                  <ColorList
                    colors={colors}
                    selectedColor={selectedColor}
                    handleColorChange={e => handleColorChange(e, formik)}
                  />
                </div>

                <ProductSize
                  size={product.size}
                  selectedSize={selectedSize}
                  handleSizeChange={e => handleSizeChange(e, formik)}
                />

                <ErrorMessage name="size" component="div" className={style.error} />

                <div className={style.description}>
                  <p className={cN(style.subtitle, style.descriptionTitle)}>Описание</p>
                  <p className={style.descriptionText}>{product.description}</p>
                </div>

                <div className={style.control}>
                  <Count
                    className={style.count}
                    count={count}
                    handleIncrement={() => handleIncrement(formik)}
                    handleDecrement={() => handleDecrement(formik)}
                  />

                  <button className={style.addCart} type="submit">
                    В корзину
                  </button>

                  <BtnLike id={id} />
                </div>
              </Form>
            )}
          </Formik>
        </Container>
      </section>

      <Goods title='Вам также может понравиться' />
    </>
  );
};