// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ChatDemo from './ChatDemo';
import Signup from './Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/chatDemo" element={<ChatDemo />} />
    </Routes>
  );
}

export default App;
