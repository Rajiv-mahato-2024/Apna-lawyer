import './App.css';
import DashboardLayout from './components/DashboardLayout';
import ChatContainer from './components/ChatContainer';

function ChatDemo() {
  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>AI Legal Chat</h1>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <ChatContainer />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ChatDemo;
