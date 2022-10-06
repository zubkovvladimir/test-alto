import { FC } from 'react';

import { withProviders } from 'hocs/withProviders';

export const setup = (Component: FC): FC => withProviders(Component);
