import './PizzaMeter.css';

interface IPizzaMeterProps {
  percent: number;
  markerColor: string;
}

function PizzaMeter({ percent, markerColor = "red" }: IPizzaMeterProps) {
  const pizzaStyles = {
    backgroundColor: markerColor,
  };

  return (
    <div className="pizza-meter-wrapper">
      <div className="completion-marker" style={pizzaStyles}></div>
    </div>
  );
}

export default PizzaMeter;
