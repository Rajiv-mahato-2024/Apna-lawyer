// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ChatDemo from './ChatDemo';
import Signup from './Signup';
import Login from './pages/Login';
import DocumentAnalysis from './features/DocumentAnalysis';
import TemplateGenerator from './features/TemplateGenerator';
import CaseTracker from './features/CaseTracker';
import Profile from './features/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/chatDemo" element={<ChatDemo />} />
          <Route path="/document-analysis" element={<DocumentAnalysis />} />
          <Route path="/template-generator" element={<TemplateGenerator />} />
          <Route path="/case-tracker" element={<CaseTracker />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
