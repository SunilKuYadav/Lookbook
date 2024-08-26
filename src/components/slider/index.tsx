import React, { useState, useEffect } from "react";
import "./styles.css";

interface SliderProps {
  totalTime: number;
  active: boolean;
  done: boolean;
  totalSize: number;
}

// Interval duration is 50ms
const intervalDuration = 50;

const Slider = ({ totalTime, active, done, totalSize }: SliderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const incrementPerInterval = 100 / (totalTime / intervalDuration);
    let timer: any;
    if (active) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + incrementPerInterval;
          if (newProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          return newProgress;
        });
      }, intervalDuration);
    }
    if (done) {
      setProgress(100);
    } else {
      setProgress(0);
    }

    return () => clearInterval(timer);
  }, [active, done, totalSize, totalTime]);

  return (
    <div className="slider-container">
      <div className="slider-track" style={{ width: `${400 / totalSize}%` }}>
        <div
          className="slider-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
