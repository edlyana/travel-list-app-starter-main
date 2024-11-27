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

  const handleChange1 = ({target}) => {        // target is jsx element where event is happening
    const updatedDescription = target.value;    // will take the latest value
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

function Item({item, onRemove}) {
  const [isPacked, setIsPacked] = useState(item.packed);
  // const [itemRemove, setItemRemove] = useState(item.id);

  // let isPacked = item.packed;
  const handleChange3 = () => {
    setIsPacked((prev) => !prev);
  };

  // const removeItem = (targetIndex) => {
  //   setItemRemove((prev) => prev.filter((item, index) => index !== targetIndex));
  // };

  return(
    <div>
      <li>
        <li style={isPacked ? { textDecoration: "line-through" } : {}}>
          <input type="checkbox" checked={isPacked} onChange={handleChange3}/>
          {item.description} ({item.quantity})
        </li>
        <li><button onClick={() => onRemove(item.id)} style={{marginLeft: 5, color: "red"}}>X</button></li>
      </li>
    </div>
  );
}

function PackingList({items, setItems}) {
  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));   // removes item by their id
  };

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onRemove={handleRemove}/>
        ))}
      </ul>
    </div>
  );
}

function Stats({items}) {
  const totalItem = items.length;
  const totalPacked = items.filter((item) => item.packed).length;   // Call for items array, to count the no. of item that has packed as true
  const compRate = totalItem > 0 ? Math.round((totalPacked/totalItem)*100):0;
  
  // Display status 
  return (
    <footer className="stats">
      <em>You have {totalItem} items in the list. You already packed {totalPacked} ({compRate}%).</em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]);
  // setItems(items)

  function handleAddItems(item) {
    setItems((prev) => {
      return [...prev, item];   // Adding new items into the list
    });
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems}/>
      <PackingList items={items} setItems={setItems}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
