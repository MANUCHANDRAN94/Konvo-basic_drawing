import React from 'react';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

const App = () => {

  const [shape, setShape] = React.useState([
    {
      name: 'rect',
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      stroke: 'black',
      dragging: false,
    },
    {
      name: 'circ',
      x: 300,
      y: 100,
      radius: 50,
      stroke: 'green',
      dragging: false,
    }
  ]);

  const handleDragStart = (e) => {
    let shapeId = e.target.name()
    setShape(prev =>
      prev.map(item => {
        return {
          ...item,
          dragging: (item.name === shapeId)
        }
      }))
  };
  const handleDragEnd = (e) => {
    setShape(prev =>
      prev.map(item => {
        return {
          ...item,
          dragging: false,
        }
      }))
  }
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} >
      <Layer>
        {shape.map((item, i) =>
          [item.name === 'rect' && <Rect
            key={i}
            id={i}
            name={item.name}
            x={item.x}
            y={item.y}
            width={item.width}
            height={item.height}
            stroke={item.stroke}
            isDragging={item.dragging}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            fill={item.dragging ? 'red' : null}
          />,
          item.name === 'circ' && <Circle x={item.x}
            key={i}
            id={i}
            name={item.name}
            y={item.y}
            radius={item.radius}
            stroke={item.stroke}
            isDragging={item.dragging}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            fill={item.dragging ? 'yellow' : null}
          />]
        )}


        <Text text="Konvo try" fontSize={25} fill='red' textDecoration='underline' />

      </Layer>
    </Stage>
  );
};

export default App;
