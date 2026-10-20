import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext.jsx";

const Nav = () => {
  const { products } = useContext(ProductContext);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Stockwell home">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="21" height="21" fill="none">
            <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="m4.5 7.8 7.5 4.4 7.5-4.4M12 12.5V20" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="brand-name">Invento <span className="text-white bg-amber-400 p-2 font-bold">for u</span><span>.</span></span>
      </a>

      <div className="topbar-actions">
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#home">Overview</a>
          <a href="#inventory" aria-current="page">Inventory</a>
        </nav>
        <div className="profile">
          <span className="profile-avatar" aria-hidden="true">SW</span>
          <span className="profile-name">My workspace</span>
        </div>
      </div>
    </header>
  );
};

export default Nav;
