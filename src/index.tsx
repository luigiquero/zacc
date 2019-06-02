import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/stylesheets/index.scss';

import App from './app/App';
import Store from './redux/Store';

import FusionCharts from 'fusioncharts/core';
import Msline from 'fusioncharts/viz/msline';
import Radar from 'fusioncharts/viz/radar';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';
ReactFC.fcRoot(FusionCharts, Msline, Radar, FusionTheme);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
