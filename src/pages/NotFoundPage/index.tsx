import { FC } from 'react';

import { useTitle } from 'ahooks';
import { appName } from 'constants/app';

const NotFoundPage: FC = () => {
  useTitle(`${appName} | 404`);

  return <div>Not Found Page</div>;
};

export default NotFoundPage;
