import cN from 'classnames';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import style from './Pagination.module.scss';

export const Pagination = () => {
  const [pagePagination, setPagePagination] = useState('');
  const pathname = useLocation().pathname;
  const { page, pages } = useSelector(state => state.goods);

  useEffect(() => {
    setPagePagination(page);
  }, [page, setPagePagination]);

  const handlePageChange = (newPage => {
    setPagePagination(newPage);
  });

  const handlePrevPage = () => {
    if (pagePagination > 1) {
      handlePageChange(pagePagination - 1);
    }
  };

  const handleNextPage = () => {
    if (pagePagination < pages) {
      handlePageChange(pagePagination + 1);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    let startPage = pagePagination === pages && pages >= 3
      ? pagePagination - 2
      : Math.max(1, pagePagination - 1);
    let endPage = Math.min(startPage + 2, pages);

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li className={style.item} key={i}>
          <NavLink
            className={cN(style.link, i === pagePagination ? style.linkActive : '')}
            to={`${pathname}?page=${i}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </NavLink>
        </li>
      );
    }

    return paginationItems;
  };

  return (
    pages > 1 &&
    <div className={style.pagination}>
      <button
        className={style.arrow}
        onClick={handlePrevPage}
        disabled={pagePagination <= 1}
      >
        <NavLink
          to={`${pathname}?page=${page - 1}`}
        >
          &lt;
        </NavLink>
      </button>

      <ul className={style.list}>{renderPaginationItems()}</ul>

      <button
        className={style.arrow}
        onClick={handleNextPage}
        disabled={pagePagination >= pages}
      >
        <NavLink
          to={`${pathname}?page=${page + 1}`}
        >
          &gt;
        </NavLink>
      </button>
    </div>
  );
};