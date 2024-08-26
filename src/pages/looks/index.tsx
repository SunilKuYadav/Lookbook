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

  return (
    <div className="lookbook-container">
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
              totalSize={dummyLookData.length}
              active={currentLook === index}
              done={index < currentLook}
              totalTime={Timer}
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
  );
};

export default Looks;
