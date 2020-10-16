import React from 'react';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

const App = () => {

  const [rectangle, setRectangle] = React.useState({
    x: 100,
    y: 50,
    width: 100,
    height: 100,
    stroke: 'black'
  });
  const [cirlce, setCircle] = React.useState({
    x: 200,
    y: 100,
    radius: 50,
    stroke: 'green'
  });

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} >
      <Layer>
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          stroke='black'
        />
        <Circle x={200} y={100} radius={50} stroke="green" />
        <Text text="Konvo try" fontSize={25} fill='red' textDecoration='underline' padding='200' />

      </Layer>
    </Stage>
  );
};

export default App;
