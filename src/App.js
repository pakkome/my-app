import React, { useState } from 'react';
import './App.css';
import MessageApp from './MessageApp';
import DataTable from './DataTable';
import NumberApp from './NumberApp';
import RandomNumberApp from './RandomNumberApp';
import ChristmasTreesApp from './ChristmasTreesApp';

function App() {
  const [activeTab, setActiveTab] = useState('ex1');

  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <a href="#" onClick={() => setActiveTab('ex1')} className={activeTab === 'ex1' ? 'active' : ''}>EX 1</a>
          <a href="#" onClick={() => setActiveTab('ex2')} className={activeTab === 'ex2' ? 'active' : ''}>EX 2</a>
          <a href="#" onClick={() => setActiveTab('ex3')} className={activeTab === 'ex3' ? 'active' : ''}>EX 3</a>
          <a href="#" onClick={() => setActiveTab('ex4')} className={activeTab === 'ex4' ? 'active' : ''}>EX 4</a>
          <a href="#" onClick={() => setActiveTab('ex5')} className={activeTab === 'ex5' ? 'active' : ''}>EX 5</a> {/* เพิ่มแท็บ EX 5 */}
        </div>

        {activeTab === 'ex1' && <MessageApp />}
        {activeTab === 'ex2' && <DataTable />}
        {activeTab === 'ex3' && <NumberApp />}
        {activeTab === 'ex4' && <RandomNumberApp />}
        {activeTab === 'ex5' && <ChristmasTreesApp />}
      </header>
    </div>
  );
}

export default App;
