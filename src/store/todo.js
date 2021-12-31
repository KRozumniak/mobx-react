import {makeAutoObservable, runInAction} from "mobx";

class Todo {
  todos = [
    {id: Date.now(), title: 'Do grocery', completed: false},
    {id: Date.now() + 1, title: 'Do laundry', completed: false},
    {id: Date.now() + 2, title: 'Do coding', completed: false},
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  removeTodo(id) {
    console.log('remove todo')
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id) {
    console.log('complete todo')
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    // if the argument theTodo the things would go easier
    // todoArg.completed = !todoArg.completed
  }

  fetchTodos() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => response.json())
      .then(json => {
          this.todos = [...this.todos, ...json]
      })
  }
}

export default new Todo();