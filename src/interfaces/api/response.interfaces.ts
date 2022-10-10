export interface ParamsFetchAll {
  currentPage: number;
}

export interface ReturnFetchAll<T> {
  totalCount: number;
  products: T[];
}

export interface IResponseWithMeta<T> {
  errorMessage?: string;
  data?: ReturnFetchAll<T>;
}

export type ApiResponseWithMeta<T> = Promise<IResponseWithMeta<T>>;
