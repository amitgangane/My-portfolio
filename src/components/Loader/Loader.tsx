import React, { useState, useEffect } from 'react';
import './Loader.css';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [nameVisible, setNameVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    // Start name animation immediately
    setTimeout(() => setNameVisible(true), 500);
    
    // Start title animation after name
    setTimeout(() => setTitleVisible(true), 2000);

    // Progress bar animation
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="loader-container">
      <div className="loader-content">
        {/* Animated Name */}
        <div className="name-container">
          <h1 className={`animated-name ${nameVisible ? 'visible' : ''}`}>
            <span className="first-name">Amit</span>
            <span className="last-name">Gangane</span>
          </h1>
          
          <p className={`animated-title ${titleVisible ? 'visible' : ''}`}>
            Machine Learning Engineer & Data Professional
          </p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>

        {/* Background Animation */}
        <div className="background-animation">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-circle circle-4"></div>
          <div className="floating-circle circle-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;