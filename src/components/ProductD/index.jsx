import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import lamp from "../../image/lamp.jpg";
import "./index.css";

function ProductD() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(function () {
    axios
      .get(
        `
https://strapi-store-server.onrender.com/api/products/${id}`
      )
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          setProduct(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="product-page">
        <div className="container">
          <div className="link-home">
            <p>House {">"} Products</p>
          </div>
          {product.id && (
            <>
              <div className="product-wrapper">
                <div className="products-img">
                  <img src={product.attributes.image} alt="" />
                </div>
                <div className="product-info">
                  <div className="product-page-name">
                    <h2>{product.attributes.title}</h2>
                  </div>
                  <div className="product-company">
                    <p>{product.attributes.company}</p>
                  </div>
                  <div className="product-page-price">
                    <p>${product.attributes.price}</p>
                  </div>
                  <div className="product-description">
                    <p>{product.attributes.description}</p>
                  </div>
                  <div className="colors">
                    <p>colors</p>
                    <div className="count-color">
                      <p className="first-color"></p>
                      <p className="second-color"></p>
                    </div>
                  </div>
                  <div className="amount">
                    <p>Amount</p>
                    <select id="amount-select">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                  <div className="add">
                    <button>ADD TO BAG</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductD;
