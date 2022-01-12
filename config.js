import Configstore from 'configstore';
import fs from 'fs';
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
// Create a Configstore instance.
const config = new Configstore(packageJson.name, { todos: [] });

// WAF listTodos, which prints the todos from database.

export function listTodos() {
  const todos = config.get('todos');
  todos.map((todo, i) => {
    console.log(`${i + 1}. ${todo.title}`);
  });
}

// WAF addTodo, which adds a todo to the database.
export function addTodo(title) {
  const todos = config.get('todos');
  const newTodo = { title: title, completed: false };
  config.set('todos', [...todos, newTodo]);
}
// WAF markAsCompleted, which marks a todo as completed.
function markAsCompleted(index) {}
// WAF removeTodo, which removes a todo from the database.
function removeTodo(index) {}
// WAF removeAllTodos, which removes all todos from the database.
function removeAllTodos() {}
