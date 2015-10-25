import _ from 'ramda';
import {Maybe} from 'ramda-fantasy';

const log = (x, y) => console.log(x);

// getItem :: string -> string
const getItems = x => localStorage.getItem(x);

// parse :: string -> json
const parse = x => JSON.parse(x);

// stringify :: json -> string
const stringify = x => JSON.stringify(x);

// setItem :: string -> f(jsonStringified) -> undefined
const setItems = x => y => localStorage.setItem(x, y);

// addItem :: string -> f(x) -> string
const addItem = x => _.compose(stringify, _.append(x), parse);

// addNSet :: Object -> f(string) -> undefined
const addNSet = x => y => _.compose(setItems(x), addItem(y));

// _createItem :: string ->f(g(x)) -> f(b)
const _createItem = key => value => _.compose(_.map(addNSet(key)(value)), Maybe, getItems);

// createItem Facade :: (key, value) => undefined
const createItem = (key, value) => _createItem(key)(value)(key);

export {createItem};
