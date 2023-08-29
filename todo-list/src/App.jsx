import { useState } from "react"; // more common
// same as:
// import React from "react" --> then use
// React.useState
import TodoItem from "./components/TodoItem";


function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet a friend for lunch",
    "Build a really cool todo app",
  ]);

  return (
    <div>
    <h1>My todo list</h1>
    {/* <TodoItem text="Finish plus project." />
    <TodoItem text="Feed cat." />
    <TodoItem text="Be awesome." />
    <TodoItem text="Eat a fish." /> */}
    {todos.map(todo => {return <TodoItem text={todo}/>;})} {/* array.map() --> expects a function */}
    {/* same as  below */}
    {todos.map((todo, index) => (
      <TodoItem text={todo} key={index} />
    ))}
    </div>
  );
}
export default App;

// fragment --> <>....</> --> when you need wrap something (alternative to div)
// fragment doesn't appear in html page, but keeps React happy.