import React, {useState, useEffect}  from "react";
import DataItem from '../../components/DataItem';
import {data} from '../../payload';


export default function Admin() {
  const [defaultData, setDefaultData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setDefaultData(data.admin);
    setLoading(true);
  },[loading])
  
  const changeColor = (id) => {
    console.log(id);
    setDefaultData((ps)=>{
      const color = defaultData.map((color)=>{
        if(color._id === id){
          setLoading(false);
          color.clicked = !color.clicked;
        }
        return color;
      })
      return color;
    })
  }

  return (
    <div>
      {defaultData.map((i) => (
        <DataItem
          key={i._id}
          name={i.name}
          onClick={() =>  changeColor(i._id)}
          clicked={i.clicked}
        />
      ))}
    </div>
  ); 
}