// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ChatDemo from './chatDemo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatDemo" element={<ChatDemo />} />
    </Routes>
  );
}

export default App;
