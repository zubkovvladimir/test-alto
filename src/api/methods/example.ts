import { endpoints } from 'api/endpoints';
import { AxiosError } from 'axios';
import { LoginData } from 'interfaces/User.interface';
import { axios } from 'utils/axios';

const example = async (data: LoginData): Promise<{ token?: string; errorMessage?: string }> => {
  try {
    const {
      data: { token },
    } = await axios.request<{ token: string }>({
      method: 'POST',
      url: endpoints.example.endpoint(),
      data,
    });
    return { token };
  } catch (error) {
    const errorAxios = error as AxiosError<any>;
    if (errorAxios.response) {
      if (errorAxios.response.status === 400) {
        return { errorMessage: errorAxios.response?.data.error };
      }
      if (errorAxios.response.status === 422) {
        return { errorMessage: 'Проверьте правильность введенных данных' };
      }
    }
    return { errorMessage: 'Произошла непредвиденная ошибка' };
  }
};

export const APIExample = {
  example,
};
