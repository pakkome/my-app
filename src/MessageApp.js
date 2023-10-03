import React, { useState } from 'react';

function MessageApp() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteMessage = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  const handleEditMessage = (index) => {
    if (editingValue.trim() !== '') {
      const newMessages = [...messages];
      newMessages[index] = editingValue;
      setMessages(newMessages);
      setEditingIndex(null);
      setPreviousValue('');
    }
  };
  const handleCancelEdit = () => {
    setEditingValue(previousValue);
    setEditingIndex(null);
    setPreviousValue('');
  };
  
return (
  <div>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <button onClick={handleSendMessage}>ส่งข้อความ</button>
    <ul>
    {messages.map((message, index) => (
  <li key={index}>
    {editingIndex === index ? (
      <div>
        <div>
          <span>{previousValue}</span>
        </div>
        <input
          type="text"
          placeholder="แก้ไขข้อความที่นี่"
          value={editingValue}
          onChange={(e) => setEditingValue(e.target.value)}
        />
        <button onClick={() => handleEditMessage(index)}>ยืนยัน</button>
        <button className='cancleedit'onClick={handleCancelEdit}>ยกเลิก</button>
      </div>
    ) : (
      <div>
        <span>{message}</span>
        <div>
          <button className='edit' onClick={() => {
            setEditingIndex(index);
            setEditingValue(message);
            setPreviousValue(message);
          }}>
            แก้ไข
          </button>
          <button className='delete' onClick={() => handleDeleteMessage(index)}>ลบ</button>
        </div>
      </div>
    )}
  </li>
))}
 </ul>
</div>
);

}

export default MessageApp;
