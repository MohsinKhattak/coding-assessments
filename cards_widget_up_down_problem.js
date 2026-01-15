import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const Cards = (props) => {
  const resetCards = new Array(props.amount).fill("down");
  const [cards, setCards] = useState(resetCards);

  const handleSelectCard = (index) => {
  const newCards = [...resetCards]; 
    newCards[index] = "up"; 
    setCards(newCards); 
  };

  return (
    <table>
      <tbody>
        <tr>
          {cards.map((card, index) => (
            <td
              key={index}
              onClick={() => handleSelectCard(index)}
            >
              {card}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));

root.render(<Cards amount={4} />);

setTimeout(() => {
  let row = document.getElementById("root").getElementsByTagName("tr")[0];
  if (row) {
    let cell = row.getElementsByTagName("td")[1];
    if (cell) {
      cell.click(); 
    }
  }
  setTimeout(() => console.log(document.getElementById("root").innerHTML));
}, 100);
