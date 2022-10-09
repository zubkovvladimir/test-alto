import React, { useState } from 'react';

import cx from 'classnames';
import { Button } from 'components/Button';
import { paginationChunk } from 'constants/other';
import { PageMeta } from 'interfaces/common.interface';
import { getPagination } from 'utils/pages';

import { PageItem } from './PageItem';
import classes from './Pagination.module.scss';

interface PaginationProps {
  meta: PageMeta;
  onChange: (id: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ meta, onChange }) => {
  const [shift, setShift] = useState(0);

  const pages = getPagination(meta.lastPage, paginationChunk);

  const prevPage = meta.currentPage - 4 > 1 ? meta.currentPage - 4 : 1;
  const nextPage = meta.currentPage + 4 < meta.lastPage ? meta.currentPage + 4 : meta.lastPage;

  const isMoreThanOnePage = pages[0].length >= 2;
  const isLastChunk = shift + 1 === pages.length;
  const isFirstChunk = !shift;

  return (
    <div className={classes['pagination__wrap']}>
      <div className={classes.pagination__prev}>
        <Button
          disabled={isFirstChunk}
          fullWidth
          onClick={() => {
            onChange(prevPage);
            setShift((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
          }}
          size="pagination"
          variant="secondary"
        >
          Назад
        </Button>
      </div>

      {isMoreThanOnePage && (
        <ul className={cx(classes.pagination, 'd-f')}>
          {!isFirstChunk && <PageItem currentPage={meta.currentPage} onChange={onChange} pageControlValue="..." />}

          {pages[shift].map((pageNumber) => (
            <PageItem
              currentPage={meta.currentPage}
              key={pageNumber}
              onChange={onChange}
              pageControlValue={pageNumber}
            />
          ))}

          {!isLastChunk && <PageItem currentPage={meta.currentPage} onChange={onChange} pageControlValue="..." />}
        </ul>
      )}

      <div className={classes.pagination__next}>
        <Button
          disabled={isLastChunk}
          fullWidth
          onClick={() => {
            onChange(nextPage);
            setShift((prev) => (prev + 1 < pages.length ? prev + 1 : prev));
          }}
          size="pagination"
          variant="secondary"
        >
          Вперед
        </Button>
      </div>
    </div>
  );
};
