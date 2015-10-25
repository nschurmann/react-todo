import _ from 'ramda';
import {Maybe} from 'ramda-fantasy';

let log = (x, y) => console.log(x);

// getItem :: string -> string
let getItems = x => localStorage.getItem(x);

// parse :: string -> json
let parse = x => x ? JSON.parse(x): null;

// stringify :: json -> string
let stringify = x => JSON.stringify(x);

// setItem :: string -> jsonStringified -> undefined
let setItems = x => y => localStorage.setItem(x, y);

// addItem :: string -> f(todo) -> string
let addItem = todo => _.compose(stringify, _.append(todo), parse);

// createItem :: string ->f(g(x)) -> f(b)
let createItem = items => todo => _.compose(setItems(items), addItem(todo), getItems);

export default class todo {

  constructor(){
    getItems('todos') ? undefined : setItems('todos')('');
  }

  create(myTodo) {
    createItem('todos')(myTodo)('todos');
  }

  show() {

  }

}

