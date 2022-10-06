import 'regenerator-runtime/runtime';

import 'assets/scss/app.scss';

import { render } from 'react-dom';

import { setup } from 'hocs/setup';

import { App } from './App';

const AppWithSetup = setup(App);

render(<AppWithSetup />, document.getElementById('app'));
