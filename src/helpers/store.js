import _ from 'ramda';
import {Maybe} from 'ramda-fantasy';

let log = (x, y) => console.log(x);

// getItem :: string -> string
let getItems = x => localStorage.getItem(x);

// parse :: string -> json
let parse = x => JSON.parse(x);

// stringify :: json -> string
let stringify = x => JSON.stringify(x);

// setItem :: string -> f(jsonStringified) -> undefined
let setItems = x => y => localStorage.setItem(x, y);

// addItem :: string -> f(x) -> string
let addItem = x => _.compose(stringify, _.append(x), parse);

// addNSet :: Object -> f(string) -> undefined
let addNSet = x => y => _.compose(setItems(x), addItem(y));

// createItem :: string ->f(g(x)) -> f(b)
let createItem = key => value => _.compose(_.map(addNSet(key)(value)), Maybe, getItems);

export {createItem};
