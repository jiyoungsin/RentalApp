import DataItem from './components/DataItem'
import React, {useState, useEffect}  from "react";
import {data} from './payload';


function App() {
  const adminData = data.main;
  const color = (id) => {
    console.log(id);
  }
  return (
    <div>
      {adminData.map((i) => (
        <DataItem
          key={i._id}
          name={i.name}
          clicked={i.clicked}
          onClick={() =>  color(i._id)}
        />
      ))}
    {console.log(data)}</div>
  ); 
}

export default App;
