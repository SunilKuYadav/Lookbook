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
      <div className="lookbook-container-inner">
        <button
          onClick={() => {
            setCurrentLook((prev) => {
              const val = (prev - 1) % dummyLookData.length;
              console.log(val);
              return val === -1 ? dummyLookData.length - 1 : val;
            });
          }}
          className="control left"
        ></button>
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
