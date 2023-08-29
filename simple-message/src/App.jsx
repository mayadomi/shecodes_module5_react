import React from "react";
import Hello from "./components/Hello";

//const App = () => {}
function App() {
  const [message, setMessage] = React.useState("Javascript is so cool");
  //"Javascript is so cool";

  // const handleClick = () => {}
  function handleClick() {
    setMessage("What even is this wizadry");
  }

  return (
  <div>
  <h1>{message}</h1>
  <button onClick={handleClick}>Update the message</button>
  </div>
  )
 //<Hello />
}

export default App
//const [message, <-- this is the thing to change
//setMessage] = <-- this is the function that changes the thing
// convention - whatever you call the thing, you call the function set-thing
// React.useState("Javascript is so cool"); <-- function with starting value



// function handleClick() {
//   setMessage("What even is this wizadry");
// }

// return (
// <div>
// <h1>{message}</h1>
// <button onClick={() => setMessage('Changed message')}>Update the message</button>
// </div>
// )