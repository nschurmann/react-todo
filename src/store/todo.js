import _ from 'ramda';
import {createItem} from '../helpers/store';

export default class todo {

  create(myTodo) {
    createItem('todos', myTodo);
  }

}

