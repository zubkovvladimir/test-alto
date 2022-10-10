import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';
import { Product } from 'interfaces/api/products.interface';
import { ParamsFetchAll, ReturnFetchAll } from 'interfaces/api/response.interfaces';

export const fetchProducts = createAsyncThunk<ReturnFetchAll<Product>, ParamsFetchAll, { rejectValue: string }>(
  'FETCH_PRODUCTS',
  async (params, { rejectWithValue }) => {
    const { data, errorMessage } = await api.products.getList(params);

    if (data) {
      return data;
    }

    if (errorMessage) {
      return rejectWithValue(errorMessage);
    }

    throw Error();
  },
);
