import React from 'react';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

const App = () => {

  const [shape, setShape] = React.useState({
    rect: {
      name: 'rect',
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      stroke: 'black',
      dragging: false,
      zIdx: 0
    },
    circ: {
      name: 'circ',
      x: 300,
      y: 100,
      radius: 50,
      stroke: 'green',
      dragging: false,
      zIdx: 0
    }
  });

  const handleDragStart = (e) => {
    let shapeName = e.target.name()
    setShape((prev) => {
      return {
        ...prev,
        [shapeName]: {
          ...prev[shapeName],
          dragging: true,
          zIdx: (prev[shapeName].zIdx + 1)
        }
      }
    })
  };
  const handleDragEnd = (e) => {
    let shapeName = e.target.name()
    setShape((prev) => {
      return {
        ...prev,
        [shapeName]: {
          ...prev[shapeName],
          dragging: false
        }
      }
    })
  }
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} >
      <Layer>
        {/* console.log({shape.circ.dragging}) */}
        <Rect
          name={shape.rect.name}
          x={shape.rect.x}
          y={shape.rect.y}
          width={shape.rect.width}
          height={shape.rect.height}
          stroke={shape.rect.stroke}
          isDragging={shape.rect.dragging}
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          fill={shape.rect.dragging ? 'red' : null}
          zIndex={shape.rect.zIdx}
        />
        <Circle x={shape.circ.x}
          name={shape.circ.name}
          y={shape.circ.y}
          radius={shape.circ.radius}
          stroke={shape.circ.stroke}
          isDragging={shape.circ.dragging}
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          fill={shape.circ.dragging ? 'yellow' : null}
          zIndex={shape.circ.zIdx}
        />
        <Text text="Konvo try" fontSize={25} fill='red' textDecoration='underline' padding='20' />

      </Layer>
    </Stage>
  );
};

export default App;
