import { useState, useEffect } from 'react';

import { convertRanges } from '../../utils/math';

import './PizzaMeter.css';

interface IPizzaMeterProps {
  percent: number;
  markerExternalClasses?: string[];
}

function PizzaMeter({ percent, markerExternalClasses = [] }: IPizzaMeterProps) {
  const [degree, setDegree] = useState(-90);
  const [opacity, setOpacity] = useState(40);

  useEffect(() => {
    const newDegree = convertRanges(percent, 0, 100, -89, 89);
    setDegree(newDegree);

    const newOpacity = convertRanges(percent, 0, 100, 40, 100);
    setOpacity(newOpacity);
  }, [percent]);

  const markerDynamicStyle = {
    opacity: `${opacity}%`,
    transform: `rotate(${degree}deg)`,
    transition: 'transform 2s, opacity 1s'
  };

  const markerClasses = ["completion-marker"].concat(markerExternalClasses).join(" ");

  return (
    <div className="pizza-img">
      <div className={markerClasses} style={markerDynamicStyle}></div>
    </div>
  );
}

export default PizzaMeter;
