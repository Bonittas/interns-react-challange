import React, { useEffect, useState } from 'react';

function Home() {
  const [currentText, setCurrentText] = useState('Welcome to the page');

  useEffect(() => {
    const textArray = ['Welcome to the Star Wars Actors Page ', 'You Can View Star Wars Movie Actors Here'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % textArray.length;
      setCurrentText(textArray[currentIndex]);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="background-image"></div>
      <div className="background-overlay"></div> 

      <div className="slide">
        <h5>{currentText}</h5>
      </div>
    </div>
  );
}

export default Home;
