import { endpoints } from 'api/endpoints';
import { AxiosError } from 'axios';
import { ApiErrors } from 'constants/errors';
import { Product } from 'interfaces/api/products.interface';
import {
  ApiResponseWithMeta,
  IResponseWithMeta,
  ParamsFetchAll,
  ReturnFetchAll,
} from 'interfaces/api/response.interfaces';
import { axios } from 'utils/axios';

const getList = async (params: ParamsFetchAll): ApiResponseWithMeta<Product> => {
  try {
    const formParams = { ...params };

    if (!params.currentPage || Number.isNaN(params.currentPage)) formParams.currentPage = 1;

    const res = await axios.get<ReturnFetchAll<Product>>(endpoints.products.list(), {
      params: { skip: formParams.currentPage },
    });

    console.log(res.data);

    return { data: res.data };
  } catch (error) {
    const errorAxios = error as AxiosError<any>;

    if (errorAxios?.response?.status === 404) {
      return { errorMessage: ApiErrors.NotFound };
    }

    return { errorMessage: ApiErrors.SomethingGoesWrong };
  }
};

export const productsApi = {
  getList,
};
