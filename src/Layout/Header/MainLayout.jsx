import "./Mainlayout.css";
import Cart from "/public/cart.svg";
import Dark from "/public/dark-mode.svg";
import { NavLink } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div>
      <div className="header-top">
        <div className="container">
          <div className="userName">
            <p>Sign in / Guest</p>
            <p>Create Account</p>
          </div>
        </div>
      </div>
      <header>
        <div className="header">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <p>C</p>
              </div>
              <div className="menus">
                <ul>
                  <li className="link">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active" : "noactive"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="link">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="link">
                    <NavLink to="/products">Products</NavLink>
                  </li>
                </ul>
              </div>
              <div className="cart">
                <img src={Dark} alt="" />
                <img src={Cart} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

export default MainLayout;
