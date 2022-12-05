function ProductCard(props) {
  const { product } = props;
  const { name, image, supplier, price, description } = product;
  return (
    <div className="wrapper">
      <div className="img">
        <img src={image} alt=""></img>
      </div>
      <div className="content">
        <div className="productName">{name}</div>
        <div className="productSupplier">By {supplier}</div>
        <div className="descrip">{description}</div>
        <span className="price">${price}</span>
        <span className="btn">BUY NOW</span>
      </div>
    </div>
  );
}

export default ProductCard;
