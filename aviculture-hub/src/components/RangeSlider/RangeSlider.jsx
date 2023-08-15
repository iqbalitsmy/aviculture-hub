// Slider.js or RangeSlider.js
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = ({ min, max, value, onChange }) => {
  const handleStyle = {
    borderColor: '#000',
    height: '18px',
    width: '18px',
    marginLeft: '-9px', // Adjust for centering
    marginTop: '-6px'  // Adjust for centering
  };

  return (
    <div className="slider-container">
      <Slider range
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        allowCross={false}
        railStyle={{ backgroundColor: '#ddd' }}
        handleStyle={[handleStyle, handleStyle]}
      />
    </div>
  );
};

export default RangeSlider;
