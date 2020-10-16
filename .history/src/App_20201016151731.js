import React from 'react';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

const App = () => {

  const [rectangle, setRectangle] = React.useState({
    x: 100,
    y: 50,
    width: 100,
    height: 100,
    stroke: 'black',


  });
  const [cirlce, setCircle] = React.useState({
    x: 300,
    y: 100,
    radius: 50,
    stroke: 'green'
  });

  const handleDragStart = (e) => {
    const id = e.target;
    console.log(id)
    let rectng = id === 'rect' ? true : false
    if (rectng) {
      setRectangle(
        {
          ...rectangle,
          isDragging: true
        })
    } else {
      setCircle(
        {
          ...cirlce,
          isDragging: true
        })
    }

  };
  const handleDragEnd = (e) => {
    const id = e.target;
    console.log(id)
    let rectng = id === 'rect' ? true : false
    console.log(rectng)

  };
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} >
      <Layer>
        <Rect
          x={rectangle.x}
          y={rectangle.y}
          width={rectangle.width}
          height={rectangle.height}
          stroke={rectangle.stroke}
          draggable
          isDragging={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
        <Circle x={cirlce.x} y={cirlce.y} radius={cirlce.radius} stroke={cirlce.stroke} draggable isDragging={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd} />
        <Text text="Konvo try" fontSize={25} fill='red' textDecoration='underline' padding='20' />

      </Layer>
    </Stage>
  );
};

export default App;
