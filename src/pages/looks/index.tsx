import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import dummyLookData from "./data";
import { Look, Slider } from "../../components";

const Timer = 5000;

const Looks = () => {
  const [currentLook, setCurrentLook] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLook((prev) => (prev + 1) % dummyLookData.length);
    }, Timer);

    return () => {
      clearTimeout(timer);
    };
  }, [currentLook]);

  const [videoDuration, setVideoDuration] = useState<number | null>(null);
  const [isVideo, setIsVideo] = useState(false);

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

  return (
    <div className="lookbook-container">
      <div className="lookbook-container-inner">
        <button
          onClick={() => {
            setCurrentLook((prev) => {
              const val = (prev - 1) % dummyLookData.length;
              return val === -1 ? dummyLookData.length - 1 : val;
            });
          }}
          className="control left"
        ></button>
        <div>
          {dummyLookData[currentLook].image ? (
            <Look item={dummyLookData[currentLook]} />
          ) : (
            <Look item={dummyLookData[currentLook]} />
          )}
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
        <button
          onClick={() => {
            setCurrentLook((prev) => (prev + 1) % dummyLookData.length);
          }}
          className="control right"
        ></button>
      </div>
    </div>
  );
};

export default Looks;
