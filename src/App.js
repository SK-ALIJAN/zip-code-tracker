
import React from 'react';
import "./App.css"
import PostalCodeForm from './components/PostalCodeForm';
import LocationInfo from './components/LocationInfo';
import { ZipCodeProvider } from './context/ZipCodeContext';

function App() {
  return (
    <div className="App">
      <ZipCodeProvider>
        <PostalCodeForm />
        <LocationInfo />
      </ZipCodeProvider>
    </div>
  );
}

export default App;
