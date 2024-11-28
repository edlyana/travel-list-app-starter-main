import React, {useState} from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: true },
];

function App() {
  const [items, setItems] = useState([]);
  // setItems(items)

  function handleAddItems(item) {
    setItems((prev) => {
      return [...prev, item];   // Adding new items into the list
    });
  }

  function handleUpdateItem(id, packed) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} setItems={setItems}/>
      <PackingList items={items} setItems={setItems} handleUpdateItem={handleUpdateItem}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
