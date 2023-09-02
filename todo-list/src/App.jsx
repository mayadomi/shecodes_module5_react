import { useState } from "react"; // more common
// same as:
// import React from "react" --> then use
// React.useState
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import './App.css';


function App() {
  // const [todos, setTodos] = useState([
  //   "Learn about React",
  //   "Meet a friend for lunch",
  //   "Build a really cool todo app",
  // ]);

  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    }, {
      text: "Meet a friend for lunch",
      isCompleted: false,
    }, {
      text: "Build really cool todo app",
      isCompleted: false,
    }
  ]);

  const addTodo = (text) => {
    //const newTodos = [...todos, text]; // compiles into new array
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
    <h1 className="todo-list">My todo list</h1>
    {/* <TodoItem text="Finish plus project." />
    <TodoItem text="Feed cat." />
    <TodoItem text="Be awesome." />
    <TodoItem text="Eat a fish." /> */}
    {/* {todos.map(todo => {return <TodoItem text={todo}/>;})} array.map() --> expects a function */}
    {/* same as  below */}
    {todos.map((todo, index) => (
      <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} removeTodo={removeTodo}/>
    ))}
    <TodoForm addTodo={addTodo}/>
    </div>
  );
}
export default App;

// fragment --> <>....</> --> when you need wrap something (alternative to div)
// fragment doesn't appear in html page, but keeps React happy.

// ... spread syntax, order matters