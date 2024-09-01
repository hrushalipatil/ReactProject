import React, { useState } from "react";


function HookCounterkeyValue() {
  //[{id:1,value:125},{id:2,value:126},{id:3,value:127}]
  const [items, setitems] = useState([])


  const addItem = () => {
    setitems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 100)
      }
    ])
  }
  return (
    <div>
      <button onClick={addItem}>Add Item to list</button>
      <ul>
        {
          items.map(items => (<li key={items.id}>{items.value}</li>))
        }
      </ul>
    </div>
  )
}               

export default HookCounterkeyValue; 