import Bacon from 'baconjs';
import {events} from '../emitter';
import {randomColors, combineColors} from './utils';
import {animateTo} from './animate';
import location from '../location';

const correctSlide = location.map(({slide}) => slide === 'how-bacon-works');

const color1 = Bacon
  .interval(1400)
  .filter(correctSlide)
  .map(randomColors)
  .toProperty(randomColors());

color1.onValue(function(color){
  animateTo("1", "c1", color);
});

const color2 = Bacon
  .interval(1700)
  .filter(correctSlide)
  .map(randomColors)
  .toProperty(randomColors());

color2.onValue(function(color){
  animateTo('2', 'c1', color);
  animateTo('2', 'c2', color);
});

const color3 = Bacon
  .interval(3000)
  .merge(Bacon.fromEvent(events, 'colorTrigger'))
  .filter(correctSlide)
  .filter(location.map(({sub}) => sub > 4))
  .map(randomColors)
  .toProperty(randomColors());

color3.onValue(function(color){
  animateTo('3', 'c2', color);
});

const combined1 = Bacon
  .combineAsArray(color1, color2)
  .throttle(400)
  .map(combineColors)
  .toProperty();

combined1.onValue(function(color){
  animateTo('c1', 'c3', color);
});

const combined2 = Bacon
  .mergeAll(color2, color3)
  .throttle(400)
  //.map(combineColors)
  .toProperty();

const merged = Bacon
  .mergeAll(color1, color2)
  .throttle(200)
  //.map(combineColors)
  .toProperty();

combined2.onValue(function(color){
  animateTo('c2', 'c3', color);
});

const combined3 = Bacon
  .combineAsArray(combined1, combined2)
  .throttle(400)
  .map(combineColors)
  .toProperty();

export default Bacon.combineTemplate({
  color1,
  color2,
  color3,
  combined1,
  combined2,
  combined3,
  merged
});

