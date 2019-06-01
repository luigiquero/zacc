/// <reference types="./types/global" />

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.scss';

import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

import App from './app/App';

ReactDOM.render(<App />, document.getElementById('root'));
