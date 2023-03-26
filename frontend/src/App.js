import axios from 'axios';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    axios.get('http://localhost:5000/hello')
      .then(res => setMessage(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={handleClick}>Say Hello</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
