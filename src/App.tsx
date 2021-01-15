import React, { useState } from 'react';
import './App.css';
import GlobalTotal from './pages/GlobalTotal';
import CountryList from './pages/CountryList';
import CountryTotal from './pages/CountryTotal';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  return (
    <div className='app'>
      <div className='app-sub'>
        <CountryList selectCountry={setSelectedCountry} selected={selectedCountry}/>
      </div>
      <div className='app-sub'>
        <GlobalTotal />
        <CountryTotal slug={selectedCountry}/>
      </div>
    </div>
  );
}

export default App;
