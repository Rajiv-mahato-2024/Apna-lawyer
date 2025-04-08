import React, { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Scale, MessageSquare, FileText, FileUp, ClipboardList, User, Settings, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Navigation items for the sidebar
  const navItems = [
    { icon: <MessageSquare size={20} />, text: 'AI Chat', path: '/chatDemo', pro: false },
    { icon: <FileUp size={20} />, text: 'Document Analysis', path: '/document-analysis', pro: true },
    { icon: <FileText size={20} />, text: 'Template Generator', path: '/template-generator', pro: true },
    { icon: <ClipboardList size={20} />, text: 'Case Tracker', path: '/case-tracker', pro: true },
    { icon: <User size={20} />, text: 'Profile', path: '/profile', pro: false },
    { icon: <Settings size={20} />, text: 'Settings', path: '/settings', pro: false },
    { icon: <HelpCircle size={20} />, text: 'Help & FAQ', path: '/help', pro: false },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <Link to="/" className="flex items-center">
            <div className="logo">
              <Scale size={24} />
            </div>
            <span className="logo-text">ApnaLawyer</span>
          </Link>
        </div>

        <div className="sidebar-menu">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.text}</span>
              {item.pro && <div className="pro-badge">PRO</div>}
            </Link>
          ))}
        </div>

        {user?.role !== 'lawyer' && (
          <div className="pro-plan-card">
            <div className="plan-content">
              <i className="fa-solid fa-cube"></i>
              <h3>Pro Plan</h3>
              <p>Unlock all premium features!</p>
              <div className="price-container">
                <span className="price">₹99</span>
                <span className="period">/ mo</span>
                <button className="get-button">Get</button>
              </div>
            </div>
          </div>
        )}

        <div className="user-profile-mini">
          <div className="user-info">
            <div className="user-avatar">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <div className="user-details">
              <span className="user-name">{user?.name}</span>
              <span className="user-role">{user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}</span>
            </div>
          </div>
        </div>

        <div className="logout-container" onClick={handleLogout}>
          <span>Log out</span>
          <LogOut size={18} />
        </div>
      </div>

      {/* Main content */}
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
