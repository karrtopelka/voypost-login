import React from 'react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import main_image from './assets/main_image.png';
import main_spiral from './assets/main_spiral.png';
import main_spiral2 from './assets/main_spiral2.png';
import plus1 from './assets/plus1.png';
import plus2 from './assets/plus2.png';
import left_footer from './assets/left_footer.png';
import middle_footer from './assets/middle_footer.png';
import right_footer from './assets/right_footer.png';

const App = () => {
  const size = window.innerWidth;

  return (
    <div className="app">
      <InputForm />
      <div className="app__boy">
        <img src={`${main_image}`} alt="main__boy" />
      </div>
      <div className="app__items app__spiral">
        <img src={`${main_spiral}`} alt="main__spiral" />
      </div>
      <div className="app__items app__spiral2">
        <img src={`${main_spiral2}`} alt="main__spiral2" />
      </div>
      <div className="app__items app__plus1">
        <img src={`${plus1}`} alt="plus1" />
      </div>
      <div className="app__items app__plus2">
        <img src={`${plus2}`} alt="plus2" />
      </div>
      <div className="app__items app__left__footer">
        <img src={`${left_footer}`} alt="main__spiral2" />
      </div>
      <div className="app__items app__middle__footer">
        <img src={`${middle_footer}`} alt="plus1" />
      </div>
      <div className="app__items app__right__footer">
        <img src={`${right_footer}`} alt="plus2" />
      </div>
      <div className="app__items app__wave">
        {size > 768 ? (
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
        ) : (
          <svg
            width="768"
            height="360"
            viewBox="0 0 768 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 109.551C0 109.551 61.3333 161.039 236.8 144.721C412.267 128.403 420.8 9.89582 586.667 0.800381C752.533 -8.29506 768 63.1301 768 63.1301V360H0V109.551Z"
              fill="#F4604D"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default App;
