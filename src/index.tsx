import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './header';
import { CustomDate } from './custom-date';
import { FruitColors } from './fruit-colors';
import { AnimalList } from './backyard-animals';

let fruit: Array<string> = ['red', 'green', 'blue', 'yellow', 'pink', 'brown'];
let animal: Array<string> = [
  'squirrel',
  'chipmunk',
  'rabbit',
  'blue jay',
  'raven',
  'cardinal',
  'hummingbird',
  'sparrow',
  'nuthatch',
];

ReactDOM.render(
  <div>
    <Header text="satisfied" />
    <CustomDate />
    <br />
    List of fruit colors:
    <FruitColors fruit={fruit} />
    <br />
    List of backyard animals:
    <AnimalList animal={animal} />
    <p>this is a paragraph</p>
    <a href="#">Click me</a>
  </div>,
  document.querySelector('#root')
);
