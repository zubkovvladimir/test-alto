import { endpoints } from 'api/endpoints';
import { AxiosError } from 'axios';
import { ApiErrors } from 'constants/errors';
import { Product } from 'interfaces/api/books.interface';
import { ApiResponseAll, ParamsFetchAll } from 'interfaces/api/response.interfaces';
import { axios } from 'utils/axios';

const getList = async (params: ParamsFetchAll): ApiResponseAll<Product> => {
  try {
    const formParams = { ...params };

    if (!params.page || Number.isNaN(params.page)) formParams.page = 1;

    const res = await axios.get<Product[]>(endpoints.products.list(), {
      params: formParams,
    });

    console.log(res);

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
