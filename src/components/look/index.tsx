import "./styles.css";

interface LookProps {
  item: any;
}

const Look = ({ item }: LookProps) => {
  return (
    <div className="lookbook-item">
      <div className="lookbook-media">
        <img src={item.image} alt="Look" className="lookbook-image" />
      </div>
    </div>
  );
};

export default Look;
