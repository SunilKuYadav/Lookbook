import { useRef, useState } from "react";
import "./styles.css";

interface LookProps {
  item: any;
}

const Look = ({ item }: LookProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <div className="lookbook-item">
      <div className="lookbook-media">
        {item.video ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              muted={isMuted}
              className="lookbook-video"
              loop
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={toggleMute} className="mute-button">
              {isMuted ? "Unmute" : "Mute"}
            </button>
          </>
        ) : (
          <img src={item.image} alt="Look" className="lookbook-image" />
        )}
      </div>
    </div>
  );
};

export default Look;
