function Sidebar() {
    return (
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo">
            <i className="fa-solid fa-scale-balanced"></i>
          </div>
          <span className="logo-text">ApnaLawyer</span>
        </div>
        
        <div className="sidebar-menu">
          <div className="menu-item active">
            <i className="fa-solid fa-comment"></i>
            <span>AI Lawyer Search</span>
          </div>
          
          <div className="menu-item">
            <i className="fa-solid fa-video"></i>
            <span>Video Chat</span>
            <div className="pro-badge">PRO</div>
          </div>
          
          <div className="menu-item">
            <i className="fa-solid fa-file"></i>
            <span>Document AI</span>
            <div className="pro-badge">PRO</div>
          </div>
          
          <div className="menu-item">
            <i className="fa-solid fa-chart-bar"></i>
            <span>Statistics</span>
            <div className="pro-badge">PRO</div>
          </div>
          
          <div className="menu-item">
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
          </div>
          
          <div className="menu-item">
            <i className="fa-solid fa-circle-question"></i>
            <span>Updates & FAQ</span>
          </div>
        </div>
        
        <div className="pro-plan-card">
          <div className="plan-content">
            <i className="fa-solid fa-cube"></i>
            <h3>Pro Plan</h3>
            <p>Strengthen artificial intelligence: get plan!</p>
            <div className="price-container">
              <span className="price">₹99</span>
              <span className="period">/ mo</span>
              <button className="get-button">Get</button>
            </div>
          </div>
        </div>
        
        <div className="logout-container">
          <span>Log out</span>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  