import React from 'react';
import './error-handler.css'
import icon from './death-star.png';

const ErrorHandler = () => {
  return (
    <div className={'error-indicator'}>
      <img src={icon} alt="error"/>
      <span className={'boom'}>BOOM!</span>
      <span>
        something goes terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  )
}

export default ErrorHandler;