import React from 'react';
import InputColor from 'react-input-color';
import Dashboard from './Dashboard';
 
function ColorPicker() {
  const [color, setColor] = React.useState({});
 
  return (
    <>
      <InputColor
        initialValue="#5e72e4"
        onChange={setColor}
        placement="right"
      />
      {/* <div
        style={{
          width: 50,
          height: 50,
          marginTop: 20,
          backgroundColor: color.hex
        }}
      /> */}
      
      <a id="coloring" style={{color: "#FFFFFF" }}>{color.hex}</a>
    </>
  );
}


export default ColorPicker;