import React from 'react';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill="red"
          shadowBlur={10}
        />
        <Circle x={200} y={100} radius={50} fill="green" />
        <Text text="Konvo try" fontSize={25} fill={'red'} textDecoration={'underline'} padding={'200'} />

      </Layer>
    </Stage>
  );
};

export default App;
