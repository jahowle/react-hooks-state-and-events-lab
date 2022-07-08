import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [things, setThings] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const itemsToDisplay = things.filter((thing) => {
    if (selectedCategory === "All") {
      return true
    } else {
      return thing.category === selectedCategory
    }
  })


  function handleFilterChange(e) {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;