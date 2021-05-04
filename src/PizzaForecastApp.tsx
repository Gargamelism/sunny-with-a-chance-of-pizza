import PizzaMeter from './components/PizzaMeter/PizzaMeter';
import RainDrops from './components/RainDrops/RainDrops';

import './PizzaForecastApp.css';
import logo from './images/logo.webp';

function PizzaForecastApp() {
  const bugCount = 10;

  return (
    <div className="pizza-forecasting-app">
      <img className="logo" src={logo} alt="logo" />
      <div className="forecast-wrapper">
        <div className="header">wabba labba dub dub</div>
        <div className="details">wabba labba dub dub</div>
      </div>
      <RainDrops count={bugCount} />
      <div className="pizza-meter-wrapper">
        <PizzaMeter percent={75} markerExternalClasses={["pizza-meter-marker-color"]} />
      </div>
    </div>
  );
}

export default PizzaForecastApp;
