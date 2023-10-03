import React, { useState } from 'react';

function NumberApp() {
  const [number, setNumber] = useState('');
  const [numbersList, setNumbersList] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddNumber = () => {
          if (number >= 1 && number <= 100) {
            const newNumbers = [];
            for (let i = 1; i <= number; i++) {
              newNumbers.push(i);
            }
            setNumbersList(newNumbers);
            setNumber('');
          } else {
            alert('กรุณากรอกตัวเลขระหว่าง 1 ถึง 100');
          }
        };

  const filteredNumbers = numbersList.filter(num => {
    if (filter === 'even') return num % 2 === 0;
    if (filter === 'odd') return num % 2 !== 0;
    return true;
  });

  return (
    <div>
      <h2>Number is required 1 - 100</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleAddNumber}>เพิ่ม</button>
      <h3>มีจำนวนทั้งหมด {filteredNumbers.length}</h3>
      <button onClick={() => setFilter('all')}>ทั้งหมด</button>
      <button onClick={() => setFilter('even')}>เลขคู่</button>
      <button onClick={() => setFilter('odd')}>เลขคี่</button>
          <div className="number-list">
           {filteredNumbers.map((num, index) => (
           <span key={index}>{num} </span>
           ))}
          </div>
    </div>
  );
}

export default NumberApp;
