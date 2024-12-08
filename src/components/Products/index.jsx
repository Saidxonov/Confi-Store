import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Product() {
  const [res, setRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(function () {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products`)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setRes(response.data.data);
          setFilteredRes(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    if (query === "") {
      setFilteredRes(res);
    } else {
      const filtered = res.filter((product) =>
        product.attributes.title.toLowerCase().includes(query)
      );
      setFilteredRes(filtered);
    }
  }

  function handleClick(id) {
    navigate(`/products/${id}`);
  }

  return (
    <>
      <div className="form">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="products">
        <div className="container">
          <div className="products-list">
            {filteredRes.length > 0 ? (
              filteredRes.map((value, index) => {
                return (
                  <div
                    onClick={() => {
                      handleClick(value.id);
                    }}
                    key={index}
                    className="card"
                  >
                    <div className="product-image">
                      <img src={value.attributes.image} alt="" />
                    </div>
                    <div className="product-title">
                      <h2>{value.attributes.title}</h2>
                      <p>${value.attributes.price}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
