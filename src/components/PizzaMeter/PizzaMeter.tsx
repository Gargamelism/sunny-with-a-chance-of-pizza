import { useState, useEffect } from 'react';

import './PizzaMeter.css';

interface IPizzaMeterProps {
  percent: number;
  markerExternalClasses: string[];
}

function PizzaMeter({ percent, markerExternalClasses = [] }: IPizzaMeterProps) {
  const [degree, setDegree] = useState(-90);

  useEffect(() => {
    setDegree(-45);
  }, []);
  
  const markerDynamicStyle = {
    opacity: `${percent}%`,
    transform: `rotate(${degree}deg)`,
    transition: 'transform 2s'
  };
  
  const markerClasses = ["completion-marker"].concat(markerExternalClasses).join(" ");

  return (
    <div className="pizza-img">
      <div className={markerClasses} style={markerDynamicStyle}></div>
    </div>
  );
}

export default PizzaMeter;
