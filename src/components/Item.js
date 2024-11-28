import React, {useState} from "react";
export default function Item({item, onRemove, handleUpdateItem}) {
    
    return(
      <div>
        <li>
          <li style={item.packed ? { textDecoration: "line-through" } : {}}>
            <input type="checkbox" checked={item.packed} onChange={(e) => handleUpdateItem(item.id, e.target.checked)} handleUpdateItem={handleUpdateItem}/>
            {item.description} ({item.quantity})
          </li>
          <li><button onClick={() => onRemove(item.id)} style={{marginLeft: 5, color: "red"}}>X</button></li>
        </li>
      </div>
    );
  }
  