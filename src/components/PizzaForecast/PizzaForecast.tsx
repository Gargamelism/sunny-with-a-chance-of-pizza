import './PizzaForecast.css';

interface IPizzaForecast {
  bugsCount: number;
  minutesLeft: number;
  pizzaChance: number;
}

function PizzaForecast({ bugsCount, minutesLeft, pizzaChance }: IPizzaForecast) {
  const pizzaChanceElem = <span className={pizzaChance === 100 ? 'warning' : ''}>{pizzaChance}%</span>;
  let details = `${bugsCount} bugs found and ${minutesLeft} minutes until 17:00`;

  return (
    <>
      {bugsCount === 0 ?
        <div className="header">Though very impressive, there might be something be wrong with the API</div> :
        <div className="header">Rainy with {pizzaChanceElem} chance for Pizza</div>
      }
      <div className="details">{details}</div>
    </>


  );
}

export default PizzaForecast;