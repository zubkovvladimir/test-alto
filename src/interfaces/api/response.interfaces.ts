export interface ParamsFetchAll {
  page: number;
}

export interface IResponseAll<T> {
  success?: boolean;
  errorMessage?: string;
  data?: T[];
}

export type ApiResponseAll<T> = Promise<IResponseAll<T>>;
