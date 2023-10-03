import React, { useState } from 'react';

function ChristmasTreesApp() {
  const [treeHeight, setTreeHeight] = useState(0);
  const [trees, setTrees] = useState([]);

  const renderTree = (treeNumber, rowNumber, treeHeight) => {
    const tree = [];

    for (let i = 1; i <= treeHeight; i++) {
      const spaces = ' '.repeat(treeHeight - i);
      const stars = '*'.repeat(i * 1);
      tree.push(`${spaces}${stars}`);
    }


    return (
          <div key={treeNumber} style={{ textAlign: 'center', position: 'relative' }}>
            {tree.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <span style={{ color: 'green' }}>{row}</span>
                <div style={{ position: 'absolute', left: '100%', whiteSpace: 'nowrap' }}>
                  <span style={{ marginLeft: '10px' }}>{rowIndex + 1}</span>
                  {rowIndex === Math.floor(treeHeight/2) && <span style={{ marginLeft: '30px' }}>{treeNumber}</span>}
                </div>
              </div>
            ))}
          </div>
        );
      };

      const renderTrunk = (treeHeight) => {
          const trunk = [];
      
          for (let i = 1; i <= treeHeight; i++) {
            const spaces = ' '.repeat(treeHeight - 1);
            trunk.push(`${spaces}**`);
          }
      
          return (
            <div key={`trunk`} style={{ textAlign: 'center', position: 'relative' }}>
              {trunk.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <span style={{ color: 'brown' }}>{row}</span>
                  <div style={{ position: 'absolute', left: '100%', whiteSpace: 'nowrap' }}>
                    <span style={{ marginLeft: '10px' }}>{rowIndex + 1}</span>
                    {rowIndex === Math.floor(treeHeight/2) && <span style={{ marginLeft: '20px' }}>Tree</span>}
                  </div>
                </div>
              ))}
            </div>
          );
      };
      

  const generateTreesAndTrunk = () => {
    const generatedTreesAndTrunk = [];

    for (let i = 1; i <= treeHeight; i++) {
      generatedTreesAndTrunk.push(renderTree(i, i, treeHeight));
    }

    generatedTreesAndTrunk.push(renderTrunk(treeHeight));

    setTrees(generatedTreesAndTrunk);
  };

  return (
          <div>
            <h2>Christmas Tree</h2>
            <div className="input-container">
              <label className="input-label" htmlFor="treeHeight">Height of Christmas Tree:</label>
              <input
                className="input-field"
                id="treeHeight"
                type="number"
                value={treeHeight}
                onChange={(e) => setTreeHeight(e.target.value)}
                min="1"
                max="10"
              />
            </div>
            <button onClick={generateTreesAndTrunk}>Generate</button>
            {trees}
          </div>
        );        
}

export default ChristmasTreesApp;
