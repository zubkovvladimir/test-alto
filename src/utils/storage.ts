import { storageTokenName } from 'constants/storage';

const storage = {
  getToken: (): string => window.localStorage.getItem(storageTokenName) as string,
  setToken: (token: string): void => {
    window.localStorage.setItem(storageTokenName, token);
  },
  clearToken: (): void => {
    window.localStorage.removeItem(storageTokenName);
  },
};

export default storage;
