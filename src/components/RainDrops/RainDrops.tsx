import generateRainDrops from '../../utils/rainDropGenerator';
import './RainDrops.css';

interface IRainDropsProps {
  count: number
}

function RainDrops({ count }: IRainDropsProps) {
  const rainDrops = generateRainDrops(count);
  
  return (
    <div className="rain-drops-wrapper">
      {rainDrops.map(({position, size, opacity}, idx) => {
        const dynamicStyle = {
          top: `${position.y}%`,
          marginLeft: `${position.x}%`,
          width: `${size.width}px`,
          height: `${size.height}px`,
          opacity: `${opacity}%`,
        };
        return (
          <div className="rain-drop" style={dynamicStyle} key={idx}></div>
        );
      })}
    </div>
  );
}

export default RainDrops;
