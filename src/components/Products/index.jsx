import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Product() {
  const [res, setRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products`)
      .then((response) => {
        if (response.status === 200) {
          const products = response.data.data;
          setRes(products);
          setFilteredRes(products);

          const uniqueCompanies = [];
          const uniqueCategories = [];

          products.forEach((product) => {
            const company = product.attributes.company;
            const category = product.attributes.category;

            if (!uniqueCompanies.includes(company)) {
              uniqueCompanies.push(company);
            }

            if (!uniqueCategories.includes(category)) {
              uniqueCategories.push(category);
            }
          });

          setCompanies(uniqueCompanies);
          setCategories(uniqueCategories);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    filterProducts(query, selectedCompany, selectedCategory);
  }

  function handleCompanyChange(e) {
    const company = e.target.value;
    setSelectedCompany(company);
    filterProducts(search, company, selectedCategory);
  }

  function handleCategoryChange(e) {
    const category = e.target.value;
    setSelectedCategory(category);
    filterProducts(search, selectedCompany, category);
  }

  function filterProducts(searchQuery, company, category) {
    let filtered = res;

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.attributes.title.toLowerCase().includes(searchQuery)
      );
    }

    if (company) {
      filtered = filtered.filter(
        (product) => product.attributes.company === company
      );
    }

    if (category) {
      filtered = filtered.filter(
        (product) => product.attributes.category === category
      );
    }

    setFilteredRes(filtered);
  }

  function handleClick(id) {
    navigate(`/products/${id}`);
  }

  return (
    <>
      <div className="form">
        <div className="container">
          <form>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleSearch}
              className="search-input"
            />

            <select
              value={selectedCompany}
              onChange={handleCompanyChange}
              className="filter-select"
            >
              <option value="">All Companies</option>
              {companies.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="filter-select"
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </form>
        </div>
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
