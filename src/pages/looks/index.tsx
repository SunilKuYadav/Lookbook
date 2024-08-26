import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import "./styles.css";
import dummyLookData from "./data";
import { Look, Slider } from "../../components";

const Timer = 5000;

const Looks = () => {
  const [currentLook, setCurrentLook] = useState(0);
  const [videoDuration, setVideoDuration] = useState<number | null>(null);
  const [isVideo, setIsVideo] = useState(false);

  const handlePrevMove = () => {
    setCurrentLook((prev) => {
      const val = (prev - 1) % dummyLookData.length;
      return val === -1 ? dummyLookData.length - 1 : val;
    });
  };
  const handleNextMove = () => {
    setCurrentLook((prev) => (prev + 1) % dummyLookData.length);
  };

  useEffect(() => {
    const timer = setTimeout(handleNextMove, Timer);

    return () => {
      clearTimeout(timer);
    };
  }, [currentLook]);

  useEffect(() => {
    if (dummyLookData[currentLook].video) {
      const videoElement = document.createElement("video");
      videoElement.src = dummyLookData[currentLook].video || "";
      videoElement.onloadedmetadata = () => {
        setVideoDuration(videoElement.duration * 1000);
      };
      setIsVideo(true);
    } else {
      setIsVideo(false);
      setVideoDuration(null);
    }
  }, [currentLook]);

  const handlers = useSwipeable({
    onSwipedDown: handlePrevMove,
    onSwipedUp: handleNextMove,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="lookbook-container">
      <div {...handlers} className="lookbook-container-inner">
        <button onClick={handlePrevMove} className="control left"></button>
        <div>
          <Look item={dummyLookData[currentLook]} />
          <div
            style={{
              width: "400px",
              display: "flex",
              position: "absolute",
              bottom: "50px",
            }}
          >
            {dummyLookData.map((item, index) => {
              return (
                <Slider
                  key={item.id}
                  totalSize={dummyLookData.length}
                  active={currentLook === index}
                  done={index < currentLook}
                  totalTime={
                    isVideo ? (videoDuration ? videoDuration : Timer) : Timer
                  }
                />
              );
            })}
          </div>
          <Link
            className="view-product"
            to={`product/${dummyLookData[currentLook].id}`}
          >
            View Product
          </Link>
        </div>
        <button onClick={handleNextMove} className="control right"></button>
      </div>
    </div>
  );
};

export default Looks;
