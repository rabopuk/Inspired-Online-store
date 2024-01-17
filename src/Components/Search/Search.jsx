import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { toggleSearch } from '../../features/searchSlice.js';
import { Container } from '../Layout/Container/Container.jsx';
import style from './Search.module.scss';

export const Search = () => {
  const dispatch = useDispatch();
  const { openSearch } = useSelector(state => state.search);
  const initialValues = {
    search: '',
  };
  const validationSchema = Yup.object({
    search: Yup.string().required('Поле обязательно для заполнения'),
  });
  const navigate = useNavigate();

  const handleSearchSubmit = ({ search }, { resetForm }) => {
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      resetForm();
      dispatch(toggleSearch(false));
    }
  };

  return (
    openSearch && <div className={style.search}>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSearchSubmit}
        >
          <Form className={style.form}>
            <Field
              className={style.input}
              type='search'
              name='search'
              placeholder='Найти...'
            />
            <ErrorMessage
              className={style.error}
              name='search'
              component={'p'}
            />

            <button className={style.btn} type='submit'>Искать</button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
};