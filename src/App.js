import React from 'react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import main_image from './assets/main_image.png';
import main_spiral from './assets/main_spiral.png';

function App() {
  return (
    <div className="app">
      <InputForm />
      <div className="app__boy">
        <img src={`${main_image}`} alt="main__boy" />
      </div>
      <div className="app__spiral">
        <img src={`${main_spiral}`} alt="main__boy" />
      </div>
      <div>
        <svg
          width="100vw"
          height="357"
          viewBox="0 0 1440 357"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 204.761C0 204.761 115 300.996 444 270.496C773 239.996 789 18.4962 1100 1.49598C1411 -15.5042 1440 117.996 1440 117.996V356.996H0V204.761Z"
            fill="#F4604D"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
