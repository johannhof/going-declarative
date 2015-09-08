import './styles/style.scss';

import React from 'react';
import Bacon from 'baconjs';

import location from './location';
import colors from './colors';

import Intro from './slides/intro';
import Flow from './slides/flow';
import HowBacon from './slides/how-bacon';
import Start from './slides/start';
import Flux from './slides/what-about-flux';
import AboutBacon from './slides/about-bacon';
import Alternatives from './slides/alternatives';
import TooMuchReact from './slides/too-much-react';
import BaconAndReact from './slides/bacon-and-react';
import FromTheTrenches from './slides/from-the-trenches';
import TheEnd from './slides/the-end';

const container = document.createElement('div');
document.body.appendChild(container);

const fa = document.createElement('link');
fa.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css';
fa.rel = 'stylesheet';
document.head.appendChild(fa);

Bacon
  .combineAsArray(colors.startWith({}), location)
  .onValues(function(_colors, {slide, sub}){
    let el;
    switch(slide){
      case '/the-end':
        el = <TheEnd sub={sub} />;
        break;
      case '/alternatives':
        el = <Alternatives sub={sub} />;
        break;
      case '/too-much-react':
        el = <TooMuchReact sub={sub} />;
        break;
      case '/what-about-flux':
        el = <Flux sub={sub} />;
        break;
      case '/from-the-trenches':
        el = <FromTheTrenches sub={sub} />;
        break;
      case '/how-bacon-works':
        el = <HowBacon colors={_colors} sub={sub} />;
        break;
      case '/bacon-and-react':
        el = <BaconAndReact sub={sub} />;
        break;
      case '/about-bacon':
        el = <AboutBacon sub={sub} />;
        break;
      case '/flow':
        el = <Flow sub={sub} />;
        break;
      case '/intro':
        el = <Intro sub={sub} />;
        break;
      default:
        el = <Start sub={sub} />;
    }
    React.render(
      <div className="container">
        <div className="head" style={{top: 10}}>Going Declarative</div>
        {el}
        <div className="head" style={{bottom: 10}}>Johann Hofmann 2015</div>
      </div>
    , container);
  });
