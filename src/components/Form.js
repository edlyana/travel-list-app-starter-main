import React, {useState} from "react";
export default function Form({handleAddItems, setItems}) {
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
  
    const handleChange3 = (e) => {
      e.preventDefault();
      setItems([]);
    };
  
    return (
      <div>
        <h3>What do you want to pack today?</h3>
        <form className="add-form" onSubmit={handleSubmit}>
          <div style={{backgroundColor: '#00515D', padding: 10, display: 'flex', alignItems: 'center', borderRadius:10, color:'white'}}>
            <h4 style={{paddingRight:7}}>Item:</h4>
            <input value={description} onChange={handleChange1} id="name" type="text" placeholder="e.g. Passport"/>
          </div>
          <div style={{backgroundColor: '#00515D',  padding: 10, display: 'flex', alignItems: 'center', borderRadius:10, color:'white'}}>
            <h4 style={{paddingRight:7}}>Qty:</h4>
            <select id="dropdown" value={quantity} onChange={handleChange2}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          
          <button>ADD</button>
          <button type="button" onClick={handleChange3}>DELETE ALL</button>
        </form>
      </div>
    );
  }