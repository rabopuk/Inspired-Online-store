import { ErrorMessage, Field, Form, Formik } from 'formik';
import { PatternFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { sendOrder } from '../../../features/cartSlice.js';
import { Container } from '../../Layout/Container/Container.jsx';
import style from './Order.module.scss';

export const Order = ({ cartItems }) => {
  const dispatch = useDispatch();

  const handleSubmitOrder = (values) => {
    dispatch(sendOrder({
      order: cartItems,
      values
    }));
  };

  const validationSchema = Yup.object({
    fio: Yup.string().required('Заполните ФИО'),
    address: Yup.string().test(
      'deliveryTest',
      'Введите адрес доставки',
      function (value) {
        return this.parent.delivery === 'delivery' ? !!value : true;
      }
    ),
    phone: Yup.string()
      .required('Введите номер телефона')
      .matches(/^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/, 'Некорректный номер телефона'),
    email: Yup.string().email('Некорректный формат e-mail').required('Заполните e-mail'),
    delivery: Yup.string().required('Выберите способ доставки'),
  });

  return (
    <section>
      <Container>
        <h2 className={style.title}>Оформление заказа</h2>

        <Formik
          initialValues={{
            fio: '',
            address: '',
            phone: '',
            email: '',
            delivery: '',
          }}
          onSubmit={handleSubmitOrder}
          validationSchema={validationSchema}
        >
          <Form className={style.form}>
            <fieldset className={style.personal}>
              <label className={style.label}>
                <Field
                  className={style.input}
                  type='text'
                  placeholder='ФИО*'
                  name='fio'
                />
                <ErrorMessage
                  className={style.error}
                  name='fio'
                  component={'span'}
                />
              </label>

              <label className={style.label}>
                <Field
                  className={style.input}
                  type='text'
                  placeholder='Адрес доставки'
                  name='address'
                />
                <ErrorMessage
                  className={style.error}
                  name='address'
                  component={'span'}
                />
              </label>

              <label className={style.label}>
                <Field
                  className={style.input}
                  as={PatternFormat}
                  format='+#(###)###-##-##'
                  mask='_'
                  placeholder='Телефон*'
                  name='phone'
                />
                <ErrorMessage
                  className={style.error}
                  name='phone'
                  component={'span'}
                />
              </label>

              <label className={style.label}>
                <Field
                  className={style.input}
                  type='email'
                  placeholder='E-mail*'
                  name='email'
                />
                <ErrorMessage
                  className={style.error}
                  name='email'
                  component={'span'}
                />
              </label>
            </fieldset>

            <fieldset className={style.radioList}>
              <label className={style.radio}>
                <Field
                  className={style.radioInput}
                  type='radio'
                  name='delivery'
                  value='delivery'
                />
                <span>Доставка</span>
              </label>

              <label className={style.radio}>
                <Field
                  className={style.radioInput}
                  type='radio'
                  name='delivery'
                  value='self'
                />
                <span>Самовывоз</span>
              </label>

              <ErrorMessage
                className={style.error}
                name='delivery'
                component={'span'}
              />
            </fieldset>

            <button className={style.submit} type='submit'>Оформить</button>
          </Form>
        </Formik>
      </Container>
    </section>
  );
};