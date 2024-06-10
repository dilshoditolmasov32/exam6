import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

const Index = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProductData(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  console.log(productData);

  return (
    <div className="singlePage container">
      <div className="productAbout">
        <div className="product_img">
          <img src={productData?.image} alt="product" width={300} />
        </div>
        <div className="product-desc">
          <h5>{productData?.title} </h5>
          <div className="price">{productData?.price} so'm</div>
          <div className="product_brend_model">
            <span>Brend: {productData?.category}</span> <br />
            <span>Model: WB10</span>
          </div>
          <div className="btns">
            <button className="btn btn-outline-success">
              Savatga qo'shish
            </button>
            <button className="btn btn-outline-primary">
              Hoziroq xarid qiling
            </button>
          </div>
        </div>
      </div>

      <div className="product_text">
        <h4>Mahsulot ta'rifi:</h4>
        <p>{productData?.description}</p>
      </div>
    </div>
  );
};

export default Index;
