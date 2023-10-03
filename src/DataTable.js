import React, { useState, useEffect } from 'react';


function DataTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      const urls = [
        'https://mocki.io/v1/e6644d9f-943a-466c-aede-591c5cba5f1b',
        'https://mocki.io/v1/423e73f8-863d-4327-9cc9-4b67bc2c5542',
        'https://mocki.io/v1/6b6f5539-06e2-4233-9c7c-1eca1c7e1dea'
      ];

      const allData = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())));

      const names = allData[0]?.data ?? [];
      const locations = allData[1]?.data ?? [];
      const counts = allData[2]?.data ?? [];

      const combinedData = names.map(name => {
        const location = locations.find(loc => loc.id === name.id);
        const count = counts.find(cnt => cnt.id === name.id);
        return {
          id: name.id,
          name: name.name,
          location: location?.location || 'ไม่มีสถานที่',
          count: count ? parseInt(count.count, 10) : 0
        };
      });
      
      setData(combinedData);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className='datatable'>จำนวนเครื่องทั้งหมด: {data.length}</h2>
      <p>ชื่อเครื่องทั้งหมด: {data.map(item => item.name).join(', ')}</p>
      <p>สถานที่ทั้งหมด: {data.map(item => item.location).join(', ')}</p>
      <p>จำนวนทั้งหมด (Count): {data.reduce((acc, item) => acc + item.count, 0)}</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>{item.count === 0 ? 'ไม่มีจำนวน' : item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
