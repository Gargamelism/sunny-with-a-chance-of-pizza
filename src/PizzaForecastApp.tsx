import PizzaMeter from './components/PizzaMeter/PizzaMeter';

import './PizzaForecastApp.css';
import logo from './images/logo.webp';

function PizzaForecastApp() {
  return (
    <div className="pizza-forecasting-app">
      <img className="logo" src={logo} alt="logo" />
      <div className="forecast-wrapper">
        <div className="header">wabba labba dub dub</div>
        <div className="details">wabba labba dub dub</div>
      </div>
      {/* rain drops */}
      <PizzaMeter percent={25} markerColor="red" />
    </div>
  );
}

export default PizzaForecastApp;
