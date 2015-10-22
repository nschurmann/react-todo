import _ from 'ramda';
import {Maybe} from 'ramda-fantasy';

let log = (x, y) => console.log(x, y);

// getItem :: storage, item -> string
let getItem = _.curry((storage, x) => storage.getItem(x));

// parse :: string -> json
let parse = (x) => x ? JSON.parse(x): null;

// stringify :: json -> string
let stringify = (x) => JSON.stringify(x);

// setItem :: storage, string, jsonStringified
let setItem = _.curry((storage, x, y) => storage.setItem(x, y));

export default class todo {

  constructor(storage = localStorage){
    this.name = 'name';
    this.storage = storage;
    this.storage.getItem('todos') ? '' : this.storage.setItem('todos', '');
  }

  create(todo) {
    this.new = _.compose(_.map(_.compose(setItem(this.storage, 'todos'), stringify, _.append(todo), parse)), Maybe, getItem(this.storage));
    this.new('todos');
  }

  show() {

  }

}

