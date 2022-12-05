import "./App.css";
import ProductCard from "./product-card/ProductCard";
import PostCard from "./post-card/PostCard";
import Timer from "./count-down/Timer";

const product = {
  name: "Harvest Vase",
  image: "https://assets.eflorist.com/assets/products/PHR_/TFL07-1A.jpg",
  supplier: "Studio and Friends",
  price: 78,
  description: "sdfghdfdds",
};

function App() {
  return (
    <div className="container">
      <h2>Bai 2: Dong ho dem nguoc</h2>
      <Timer />
      <h2>Bai 1: Hien thi du lieu API va button Search, Scroll to Top </h2>
      <PostCard />
      {/* <h2>Bai 3: Tao product card</h2>
      <ProductCard product={product} /> */}
    </div>
  );
}

export default App;
