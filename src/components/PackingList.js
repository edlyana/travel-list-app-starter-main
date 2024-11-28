import React, {useState} from "react";
import Item from "./Item";
export default function PackingList({items, setItems, handleUpdateItem}) {
    const handleRemove = (id) => {
      setItems((prev) => prev.filter((item) => item.id !== id));   // removes item by their id
    };
  
    const sortItems = [...items].sort((packedTrue, packedFalse) => packedTrue.packed - packedFalse.packed);
  
    return (
      <div className="list">
        <ul>
          {sortItems.map((item) => (
            <Item key={item.id} item={item} onRemove={handleRemove} handleUpdateItem={handleUpdateItem}/>
          ))}
        </ul>
      </div>
    );
}
