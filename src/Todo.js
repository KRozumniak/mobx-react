import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(() => {

  const style = {
    textDecoration: 'line-through'
  }

  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>fetch</button>
      {todo.todos.map(el =>
        <div className='todo' key={el.id}>
          <input type="checkbox"
                 checked={el.completed}
                 onChange={() => todo.completeTodo(el.id)}/>
          <span className='todo__item' style={el.completed ? style : {}}>
          {el.title}
          </span>
          <button onClick={() => todo.removeTodo(el.id)}>x</button>
        </div>
      )}
    </div>
  );
});

export default Todo;