
interface IPosistion {
  x: number;
  y: number;
}

interface ISize {
  width: number;
  height: number;
}

interface IRainDropProps {
  position: IPosistion;
  size: ISize;
  opacity: number;
}

function getRandomInt(min: number, max: number): number {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function getX() { return getRandomInt(0, 95) };
function getY() { return getRandomInt(0, 95) };
function getWidth() { return getRandomInt(5, 10) };
function getHeight() { return getRandomInt(10, 20) };
function getOpacity() { return getRandomInt(25, 100) };

function generateRainDrops(count: number): IRainDropProps[] {
  let rainDrops = [];

  for (let i = 0; i < count; i++) {
    rainDrops.push({
      position: {
        x: getX(),
        y: getY()
      },
      size: {
        height: getHeight(),
        width: getWidth()
      },
      opacity: getOpacity(),
    });
  }

  return rainDrops;
}

export default generateRainDrops;