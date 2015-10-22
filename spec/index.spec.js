import assert from 'assert';
import rewire from 'rewire';
import sinon from 'sinon';
import {expect} from 'chai';
import todos from './mocks/todos';
import LocalStorage from './mocks/localStorage.js';
import Todo from '../src/store/todo';


let todo,
    localStorage,
    localStorageMock,
    task = { id: 5, title: 'new task', completed: false };

describe('Todo Model', () => {

  beforeEach(function() {
    localStorage     = new LocalStorage();
    localStorageMock = sinon.mock(localStorage);
    todo             = new Todo(localStorage);
  });

  describe('add todo', () => {
    it('have a create method', () => {
      expect(todo).property('create');
    });

    it('should not delete the previous todos', function () {
      localStorage.setItem('todos', JSON.stringify(todos));
      todo.create(task);
      expect(JSON.parse(localStorage.data['todos']).length).to.equal(5);
    });

    it('save the todo to localStorage',()  =>{
      localStorageMock.expects('setItem').once();
      todo.create(task);
      localStorageMock.verify();
      expect(localStorage.data['todos']).to.be.a('string');
    });



    it('throw error if localStorage fails', () => {
      localStorageMock.restore();
      sinon.stub(localStorage, 'setItem').onFirstCall().throws();
      expect(todo.create).to.throw();
      // todo.create(task);
      // localStorageMock.verify();
    });
  });

  describe('todo done', () => {
    it.skip('change the state of the todo',()  =>{

    });

    it.skip('delete the todo after 1 second', () => {
      // body...
    });

    it.skip('throw error ', () => {
      // body...
    });
  });
});