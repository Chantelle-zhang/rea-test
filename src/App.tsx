import React from 'react';
import './App.css';
import  CommonList from './components/CommonList';
import SavedList from "./components/SavedList";

function App() {
  return (
      <div className={'app'}>
    <div className="container">
        <div className={'halfWidth'}>
      <CommonList/>
      </div>
          <div className={'halfWidth'}>
      <SavedList/>
          </div>
    </div>
      </div>
  );
}

export default App;
