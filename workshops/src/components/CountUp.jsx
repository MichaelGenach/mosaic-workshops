// src/components/CountUp.jsx
import React, { useState, useEffect } from 'react';

const CountUp = ({ 
  start = 0, 
  end, 
  duration = 2, 
  decimals = 0, 
  decimal = ".", 
  prefix = "", 
  suffix = "",
  separator = "",
  useEasing = true,
  onStart,
  onEnd
}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (onStart) onStart();
    
    let startTime = null;
    const startValue = start;
    const endValue = end;
    const durationMs = duration * 1000;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / durationMs, 1);

      let easedProgress = progress;
      if (useEasing) {
        // Ease out cubic
        easedProgress = 1 - Math.pow(1 - progress, 3);
      }
      
      const currentValue = startValue + (endValue - startValue) * easedProgress;
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (onEnd) {
        onEnd();
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration, useEasing, onStart, onEnd]);

  const formatNumber = (num) => {
    let formatted = num.toFixed(decimals);
    
    if (separator && separator !== "") {
      const parts = formatted.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      formatted = parts.join(decimal);
    } else if (decimal !== ".") {
      formatted = formatted.replace(".", decimal);
    }
    
    return `${prefix}${formatted}${suffix}`;
  };

  return <span>{formatNumber(count)}</span>;
};

export default CountUp;