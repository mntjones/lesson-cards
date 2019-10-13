import React from 'react';
import './style/App.css';
import TabbedLesson from './TabbedLesson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hanen More Than Words - Speech Therapy Acronyms
      </header>

      <div className="Tabs">
        < TabbedLesson />
      </div>

      <div className="AddLinks">

        <p>Additional links to resources:</p>


      </div>
    </div>
  );
}

export default App;
