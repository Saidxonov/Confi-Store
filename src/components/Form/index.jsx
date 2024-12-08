import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function Form() {
  const [productSearch, setProductSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [freeShipping, setFreeShipping] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    const params = {
      title: productSearch || undefined,
      category: category !== "all" ? category : undefined,
      company: company !== "all" ? company : undefined,
      shipping: freeShipping || undefined,
    };

    try {
      const response = await axios.get(
        "https://strapi-store-server.onrender.com/api/products/",
        { params }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
    if (productSearch) params.title = productSearch;
    if (category !== "all") params.category = category;
    if (company !== "all") params.company = company;
    if (freeShipping) params.shipping = true;

    try {
      const response = await axios.get(
        "https://strapi-store-server.onrender.com/api/products/",
        { params }
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("API so'rovida xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setProductSearch("");
    setCategory("all");
    setCompany("all");
    setFreeShipping(false);
    setProducts([]);
  };

  return (
    <div className="form-container container">
      <div className="form-content">
        <div className="form-fields">
          <div className="input-group">
            <label className="input-label" htmlFor="productSearch">
              Search Product
              <input
                id="productSearch"
                type="text"
                placeholder="Enter product name"
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="categorySelect">
              Select Category
              <select
                id="categorySelect"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All</option>
                <option value="Tables">Tables</option>
                <option value="Chair">Chair</option>
                <option value="Kids">Kids</option>
                <option value="Sofas">Sofas</option>
                <option value="Beds">Beds</option>
              </select>
            </label>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="companySelect">
              Select Company
              <select
                id="companySelect"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              >
                <option value="all">All</option>
                <option value="Modenza">Modenza</option>
                <option value="Luxora">Luxora</option>
                <option value="Artiflex">Artiflex</option>
                <option value="Comfora">Comfora</option>
                <option value="Homestead">Homestead</option>
              </select>
            </label>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="sortBySelect">
              Sort by
              <select id="sortBySelect" defaultValue="a-z">
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
            </label>
          </div>
        </div>
        <div className="additional-options">
          <div className="shipping-option">
            <label htmlFor="freeShipping" className="shipping-label">
              Free Shipping
              <input
                type="checkbox"
                id="freeShipping"
                checked={freeShipping}
                onChange={(e) => setFreeShipping(e.target.checked)}
              />
            </label>
          </div>
          <button
            className="search-btn"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? "Loading..." : "SEARCH"}
          </button>
          <button className="reset-btn" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
      <div className="product-list">
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.title}</strong> - ${product.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default Form;
