function ChatContainer() {
    return (
      <div className="chat-container">
        <div className="user-text">
          <p>give me any three random leagal advice</p>
        </div>
        
        <div className="code-example">
          <p> 1. Never admit fault after an accident. Whether it's a car crash or a workplace incident, avoid saying anything that could be interpreted as an admission of guilt. Let the insurance companies and legal professionals determine liability. <br />
              
            2. Know your tenant rights. If you're renting a property, familiarize yourself with local laws on eviction, security deposits, and maintenance responsibilities. Landlords cannot just kick you out without due process. <br />
              
            3. Always document agreements. Whether it's a business deal, loan, or even a personal arrangement, put it in writing. A signed document carries more weight than a verbal agreement. <br />
          </p>
        </div>
        
        <div className="user-text">
          <p>What are the essential elements of a legally binding contract?</p>
        </div>
        
        <div className="code-example">
          <p> Never admit fault after an accident. Whether it's a car crash or a workplace incident, avoid saying anything that could be interpreted as an admission of guilt. Let the insurance companies and legal professionals determine liability. <br />
            Know your tenant rights. If you're renting a property, familiarize yourself with local laws on eviction, security deposits, and maintenance responsibilities. Landlords cannot just kick you out without due process. <br />
          </p>
        </div>
  
        <div className="note-box">
          <p>Note: This is just an example of our product prototype.</p>
        </div>
        
        <div className="feedback-buttons">
          <button><i className="fa-regular fa-thumbs-up"></i></button>
          <button><i className="fa-regular fa-thumbs-down"></i></button>
          <button><i className="fa-regular fa-copy"></i></button>
        </div>
        
        <div className="regenerate-container">
          <button className="regenerate-button">
            <i className="fa-solid fa-rotate"></i>
            <span>Regenerate response</span>
          </button>
        </div>
        
        <div className="message-input">
          <button className="attach-button"><i className="fa-regular fa-file"></i></button>
          <button className="voice-button"><i className="fa-solid fa-microphone"></i></button>
          <input type="text" placeholder="Start typing" />
          <button className="send-button"><i className="fa-solid fa-paper-plane"></i></button>
        </div>
        
        <div className="disclaimer">
          <p>Free Research Preview. ApnaLawyer may produce inaccurate information about people, places, or facts. 
            <a href="#">ApnaLawyer April 4 Version</a>
          </p>
        </div>
        
        <div className="clear-history">
          <i className="fa-regular fa-trash-can"></i>
          <span>Clear history</span>
        </div>
      </div>
    );
  }
  
  export default ChatContainer;
  