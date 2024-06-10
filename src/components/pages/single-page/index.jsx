import { memo, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

const Index = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    axios
      .get(`products/${id}`)
      .then((res) => setProductData(res.data))
      .catch((res) => console.log(res));
  }, []);

  return (
    <div className="singlePage">
      <div className="container productAbout">
        <div className="more_about_the_product">
          <div id="product__about">
            <div className="product_img">
              <img src={productData?.images[0]} alt="" />
            </div>
            <div className="product_desc">
              <button className="smallBtn">Sale Off</button>
              <h2 className="productName">{productData?.brand}</h2>
              <div className="comment">(32 reviews)</div>
              <h4>
                <span>$40</span>
                <div className="chegirma">
                  {productData?.discountPercentage}% Off
                  <p>$ {productData?.price}</p>
                </div>
              </h4>
              <p className="text">{productData?.description}</p>
              <div className="product_div">
                <div className="product_size">Size / Weight:</div>
                <div className="singlePage_links">
                  <NavLink>50g</NavLink>
                  <NavLink className="activ">60g</NavLink>
                  <NavLink>80g</NavLink>
                  <NavLink>100g</NavLink>
                  <NavLink>150g</NavLink>
                </div>
              </div>

              <div className="product_about_more">
                <input type="number" name="number" id="number"  />
                <button className="card_add_btn">
                  <img src={savatcha} alt="savtcha" className="savatcha" />
                  Add to cart
                </button>
                <button className="like_btn">
                  <img src={like} alt="like" />
                </button>
                <button className="refresh_btn">
                  <img src={refresh} alt="refresh" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h5>
              <img src={mahsulotlar} alt="products" id="mahsulotlar" />
            </h5>
          </div>
          <div className="card_text">
            <img src={text} alt="desc" id="product_desc_text" />
          </div>
        </div>
     
      </div>
    </div>
  );
};
export default memo(Index);