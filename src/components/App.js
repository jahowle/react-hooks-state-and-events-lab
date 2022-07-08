import React, { useState }from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [mode, setMode] = useState(false)

  function handleClick() {
    setMode((mode) => !mode)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;