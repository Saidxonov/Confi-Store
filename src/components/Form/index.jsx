import React from "react";
import "./index.css";

function Form() {
  return (
    <div className="form-container container">
      <div className="form-content">
        <div className="form-fields">
          <div className="input-group">
            <label className="input-label" htmlFor="productSearch">
              Search Product
              <input id="productSearch" type="text" placeholder="" />
            </label>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="categorySelect">
              Select Category
              <select id="categorySelect">
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
              <select id="companySelect">
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
              <select id="sortBySelect">
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
            </label>
          </div>
        </div>
        <div className="additional-options">
          <div className="price-range">
            <label htmlFor="priceRange">
              <div className="price-range-header">
                <div className="price-label">Select Price</div>
                <div className="price-value">$1,000.00</div>
              </div>
              <input
                id="priceRange"
                type="range"
                placeholder="Price of thing"
              />
              <div className="price-range-footer">
                <div className="min-price">0</div>
                <div className="max-price">Max: $1,000.00</div>
              </div>
            </label>
          </div>
          <div className="shipping-option">
            <label htmlFor="freeShipping" className="shipping-label">
              Free Shipping
              <input type="checkbox" id="freeShipping" />
            </label>
          </div>
          <button className="search-btn">SEARCH</button>
          <button className="reset-btn">RESET</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
