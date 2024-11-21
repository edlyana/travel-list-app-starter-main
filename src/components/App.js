import React, {useState} from "react";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: true },
];

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({handleAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: Number(quantity),
      packed: false,
    };
    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  const handleChange1 = ({target}) => {
    const updatedDescription = target.value;
    setDescription(updatedDescription);
  }
  const handleChange2 = ({target}) => {
    const updatedQuantity = target.value;
    setQuantity(Number(updatedQuantity));
  }

  // function handleAddItems(item) {
  //   setItems((prev) => {
  //     return [...prev, item];
  //   });
  // }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select id="dropdown" value={quantity} onChange={handleChange2}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input value={description} onChange={handleChange1} id="name" type="text" placeholder="Item..."/>
      <button>ADD</button>
    </form>
  );
}

function Item({item}) {
  const isPacked = item.packed;
  // if (isItem) {
  //   return(style={textDecoration:"line-through"})
  // }
  return(
    <div>
      <li style={isPacked ? { textDecoration: "line-through" } : {}}>
        {item.description} ({item.quantity})
      </li>
    </div>
  );
}

function PackingList({items}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item}/>
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in the list. You already packed Y (Z%).</em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]);
  // setItems(items)

  function handleAddItems(item) {
    setItems((prev) => {
      return [...prev, item];
    });
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems}/>
      <PackingList items={items}/>
      <Stats />
    </div>
  );
}

export default App;
