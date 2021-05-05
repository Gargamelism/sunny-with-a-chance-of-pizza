import { useState, useEffect } from 'react';
import { getJSONRequest } from './utils/network';
import { calcPizzaChance } from './utils/general';
import { getMinutesToNextTime } from './utils/time';

import PizzaForecast from './components/PizzaForecast/PizzaForecast';
import ErrorMsg from './components/ErrorMsg/ErrorMsg';
import PizzaMeter from './components/PizzaMeter/PizzaMeter';
import RainDrops from './components/RainDrops/RainDrops';

import './PizzaForecastApp.css';
import logo from './images/logo.webp';

function PizzaForecastApp() {
  const [bugsCount, setBugsCount] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [pizzaChance, setPizzaChance] = useState(0);
  const [hasBugsNumber, setHasBugsNumber] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getJSONRequest(process.env.REACT_APP_BUG_API_URL!)
      .then((bugsCount: { 0?: number }) => {
        if (typeof bugsCount['0'] === 'number') {
          setBugsCount(bugsCount['0']);
          setHasBugsNumber(true);

          const newMinutesLeft = getMinutesToNextTime(process.env.REACT_APP_PIZZA_TIME!);
          setMinutesLeft(newMinutesLeft);

          const newPizzaChance = calcPizzaChance(bugsCount['0'], newMinutesLeft);
          setPizzaChance(newPizzaChance);
        } else {
          setError(true);
        }
      });
  }, []);

  return (
    <div className="pizza-forecasting-app">
      <img className="logo" src={logo} alt="logo" />
      <div className="forecast-wrapper">
        {/* conditions are not combined to avoid displaying the wrong information while loading */}
        {!hasBugsNumber && error && <ErrorMsg msg="No available forecast" />}
        {hasBugsNumber && <PizzaForecast bugsCount={bugsCount} pizzaChance={pizzaChance} minutesLeft={minutesLeft} />}
      </div>
      <RainDrops count={bugsCount} />
      <div className="pizza-meter-wrapper">
        <PizzaMeter percent={pizzaChance} markerExternalClasses={["pizza-meter-marker-color"]} />
      </div>
    </div>
  );
}

export default PizzaForecastApp;
