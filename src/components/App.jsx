import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleText(event) {
    setText(event.target.value);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, text];
    });

    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleText} value={text} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
