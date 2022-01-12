#!/usr/bin/env node

import { listTodos, addTodo } from './config.js';

function main() {
  // cli application
  const INDEX = 2;
  const { argv } = process;
  switch (argv[INDEX]) {
    case 'list':
      console.log('list of todos');
      listTodos();
      break;
    case 'add':
      console.log('add todo');
      addTodo(argv[INDEX + 1]);
      break;
    default:
      console.log('invalid command');
      break;
  }
}

main();
