import React,{useState} from 'react';
import { createRoot } from 'react-dom/client';

const List = (props) => {
 const [items,setItems]=useState(props.items);
  const handleClick=(index)=>{
    const newItems=[...items];
    const itemToBeReplaced=newItems.splice(index,1);
    newItems.unshift(itemToBeReplaced);
    setItems(newItems)
  }
  
  return  (
    <ul>  {items.map((item, index) => (
        <li key={index} onClick={() => handleClick(index)}>
          {item}
        </li>
      ))}
     
    </ul> 
  
  );
}

document.body.innerHTML = "<div id='root'> </div>";
  
const root = createRoot(document.getElementById("root"));
root.render(<List items={["A", "B", "C"]} />);

setTimeout(() => {
  let listItem = document.querySelectorAll("li")[2];
  if(listItem) {
    listItem.click();
    setTimeout(() => console.log(document.getElementById("root").innerHTML), 100);
  }
}, 100);