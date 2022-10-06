import { FC } from 'react';

import { useTitle } from 'ahooks';
import { appName } from 'constants/app';

const MainPage: FC = () => {
  useTitle(`${appName} | Главная`);

  return <div>Main page</div>;
};

export default MainPage;
