import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/SidebarRight';
import SidebarRight from './components/MainContent';

function ChatDemo() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
      <SidebarRight />
    </div>
  );
}

export default ChatDemo;