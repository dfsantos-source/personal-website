import './App.css';
import './Navbar.css';

import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import ContactMe from './components/ContactMe'
import Links from './components/Links'


function App() {
  return (
    <div className="App">
      <div className="card">
        <header className="App-header">
          <div className="MainContent">
            <MainContent />
          </div>
          <div className="ContactMe">
            <ContactMe />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
