import { PageMeta } from 'interfaces/common.interface';

export const paginationChunk = 4;

export const defaultPageMeta: PageMeta = {
  currentPage: 1,
  perPage: 4,
  lastPage: 1,
  total: 0,
};
