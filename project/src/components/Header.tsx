function Header() {
    return (
      <div className="header">
        <h1>AI Lawyer</h1>
        
        <div className="search-container">
          <i className="fa-solid fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        
        <div className="header-icons">
          <i className="fa-regular fa-bell"></i>
          <i className="fa-regular fa-square"></i>
        </div>
        
        <div className="history-button">
          <span>History</span>
          <span className="history-count">6/50</span>
        </div>
      </div>
    );
  }

export default Header;