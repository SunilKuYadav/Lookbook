import { Image1, Image2, Image3, Image4 } from "../../assets";

const dummyLookData = [
  {
    id: 1,
    image: Image1,
    annotations: [
      { x: 50, y: 30, productId: 1, label: "Top" },
      { x: 60, y: 70, productId: 2, label: "Pants" },
    ],
  },
  {
    id: 2,
    image: Image2,
    annotations: [
      { x: 40, y: 20, productId: 3, label: "Jacket" },
      { x: 55, y: 75, productId: 4, label: "Shoes" },
    ],
  },
  {
    id: 3,
    image: Image3,
    annotations: [
      { x: 45, y: 50, productId: 5, label: "Dress" },
      { x: 70, y: 80, productId: 6, label: "Bag" },
    ],
  },
  {
    id: 4,
    image: Image4,
    annotations: [
      { x: 30, y: 40, productId: 7, label: "Hat" },
      { x: 60, y: 60, productId: 8, label: "Scarf" },
    ],
  },
  {
    id: 5,
    video:
      "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_h264.mp4",
  },
];

export default dummyLookData;
