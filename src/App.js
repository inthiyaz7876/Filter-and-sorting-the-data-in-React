import React, { useState } from 'react';
import './style.css';

export default function App() {
  /* this is your example data */
  const data = [
    { id: 755, listId: 2, name: 'Naveen' },
    { id: 203, listId: 2, name: 'Praveen' },
    { id: 684, listId: 1, name: 'Kiran' },
    { id: 276, listId: 1, name: 'Item 276' },
    { id: 736, listId: 3, name: null },
    { id: 926, listId: 4, name: null },
    { id: 808, listId: 4, name: 'Inthiyaz' },
    { id: 599, listId: 1, name: 'Yusuf' },
    { id: 424, listId: 2, name: null },
    { id: 444, listId: 1, name: '' },
    { id: 809, listId: 3, name: 'Balu' },
    { id: 293, listId: 2, name: 'Anil' },
    { id: 510, listId: 2, name: null },
  ];
  const [d, setD] = useState(true); /** For Order change */
  const [messageButton, SetMessageButton] =
    useState('Assending'); /** For Button message change  */

  /**If you have null or empty names this will clear */
  function removeNull({ name }) {
    return Boolean(name);
  }

  /** You will get two objects to compare from data as 'a' and  'b' params */
  function sortByIdThenName(a, b) {
    const n = a.name - b.name;
    // sort by name
    if (n === 0) {
      return n;
    }

    if (d) {
      /** This 'd' will represent the assending or decending orders */
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  }

  /**Filter with sorting the data */
  const sorted = data.filter(removeNull).sort(sortByIdThenName);

  console.log(sorted);
  /** Onclick of button changing the button message and order */
  const changeOrder = () => {
    if (messageButton == 'Assending') {
      SetMessageButton('Dessending');
      setD(false);
    } else {
      SetMessageButton('Assending');
      setD(true);
    }
  };
  return (
    <div>
      <h1>Filtering the Data</h1>
      Click on this button to change order
      <button onClick={() => changeOrder()}>{messageButton}</button>
      {/* To Show the names in page used map function */}
      {sorted.map((item) => (
        <h3>{item.name}</h3>
      ))}
    </div>
  );
}
