import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ws, setWs] = useState<WebSocket>();

  useEffect(() => {
    const _ws = new WebSocket("ws://localhost:1234/ws")
    setWs(_ws);
    
    if (!ws) return
    ws.onopen = () => {   // 연결!
      console.log("connected!!");
    };
  }, []);

  const sendMessage = () => {
    if (!ws) return

    ws.send('Client Message: hello server');

    ws.onmessage = (evt: MessageEvent) => {
      console.log(evt);
      console.log(evt.data);
    };
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sendMessage}>Send message to server</button>
      </header>
    </div>
  );
}

export default App;
