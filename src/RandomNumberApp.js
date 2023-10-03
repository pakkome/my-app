import React, { useState } from 'react';

function RandomNumberApp() {
  const [requiredNumber, setRequiredNumber] = useState('');
  const [randomCount, setRandomCount] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [filterNumber, setFilterNumber] = useState('');
  const [filteredNumbers, setFilteredNumbers] = useState([]);
  const [excludedNumbers, setExcludedNumbers] = useState([]);
  const [error, setError] = useState('');
  const inputBorderColor = error ? 'red' : 'initial';

const handleSubmit = () => {
    if (requiredNumber !== '') {
      setNumbers([...numbers, parseInt(requiredNumber)]);
      setRequiredNumber('');
      setError('');
    } else {
      setError('กรุณากรอกจำนวน');
    }
  };

  const handleRandom = () => {
    if (randomCount >= 1 && randomCount <= 9) {
      const newNumbers = [];
      for (let i = 0; i < randomCount; i++) {
        newNumbers.push(Math.floor(Math.random() * 10));
      }
      setNumbers([...numbers, ...newNumbers]);
      setRandomCount('');
    } else {
      alert('กรุณากรอกจำนวนตัวเลขที่ต้องการสุ่มระหว่าง 1-9');
    }
  };

  const handleFilter = () => {
    const filtered = numbers.filter(num => num === parseInt(filterNumber));
    setFilteredNumbers(filtered);
    const excluded = numbers.filter(num => num !== parseInt(filterNumber));
    setExcludedNumbers(excluded);
  };

  const handleClear = () => {
    setNumbers([]);
    setFilterNumber('');
    setFilteredNumbers([]);
    setExcludedNumbers([]);
  };
  return (
    <div>
        <div className="input-container">
            <label className="input-label" htmlFor="requiredNumberInput">Require number:<span style={{color: 'red'}}>*</span></label>
            <input
                id="requiredNumberInput"
                className="input-field"
                type="number"
                value={requiredNumber}
                onChange={(e) => setRequiredNumber(e.target.value)}
                style={{borderColor: inputBorderColor}}
            />
            <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
             {error && <div style={{color: 'red', fontSize: '15px', margin: '8px 15px'}}>{error}</div>}
            </div>
        <div className="input-container">
            <label className="input-label" htmlFor="randomCountInput">จำนวนตัวเลขที่ต้องการสุ่ม (1-9):</label>
            <input
                id="randomCountInput"
                className="input-field"
                type="number"
                value={randomCount}
                onChange={(e) => setRandomCount(e.target.value)}
            />
            <button onClick={handleRandom}>Random Number</button>
        </div>
        <div className="input-container">
            <label className="input-label" htmlFor="filterNumberInput">เลขที่ต้องการ filter:</label>
            <input
                id="filterNumberInput"
                className="input-field"
                type="number"
                value={filterNumber}
                onChange={(e) => setFilterNumber(e.target.value)}
            />
            <button onClick={handleFilter}>Filter</button>
        </div>

        <button className='input-button' onClick={handleClear}>Clear Number</button>

        <div style={{ borderBottom: '1px solid black' }}>
        <h4 style={{ textAlign: 'left' }}>จำนวนเลขทั้งหมด: {numbers.length}</h4>
        <div>{numbers.join(', ')}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4 style={{ textAlign: 'left' }}>เลขที่มีในการ filter: {filteredNumbers.length}</h4>
            <h4 style={{ textAlign: 'right' }}>เลขที่ไม่มีในการ filter: {excludedNumbers.length}</h4>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>{filteredNumbers.join(', ')}</div>
            <div>{excludedNumbers.join(', ')}</div>
        </div>
    </div>
);

}

export default RandomNumberApp;
