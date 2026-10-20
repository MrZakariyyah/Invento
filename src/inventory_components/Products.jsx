import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext.jsx";

const Products = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  function handleDelete(id) {
    setProducts((currentProducts) => currentProducts.filter((product) => product.id !== id));
  }

  function getStockStatus(quantity) {
    const amount = Number(quantity);
    if (amount === 0) return { label: "Out of stock", className: "out-of-stock" };
    if (amount <= 5) return { label: "Low stock", className: "low-stock" };
    return { label: "In stock", className: "in-stock" };
  }

  return (
    <section className="panel inventory-panel" id="inventory" aria-labelledby="inventory-title">
      <div className="inventory-top">
        <div className="section-heading">
          <h2 id="inventory-title">Your products</h2>
          <span className="item-count">{products.length} {products.length === 1 ? "item" : "items"}</span>
        </div>
        <div className="inventory-actions">
          <span className="inventory-caption">Manage and track your stock</span>
          <label className="search-box">
            <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="none">
              <circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.5" />
              <path d="m13.2 13.2 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              aria-label="Search products"
              placeholder="Search products"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="table-scroll">
          <table className="inventory-table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Status</th>
                <th scope="col"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => {
                const status = getStockStatus(product.qty);
                return (
                  <tr key={product.id}>
                    <td>
                      <div className="product-cell">
                        <span className="product-icon" aria-hidden="true">
                          <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
                            <path d="m3 6.5 7-3.8 7 3.8v7l-7 3.8-7-3.8v-7Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
                            <path d="m3.4 6.8 6.6 3.7 6.6-3.7M10 10.5v6.6" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="product-name">{product.name}</span>
                      </div>
                    </td>
                    <td>{product.qty} {Number(product.qty) === 1 ? "unit" : "units"}</td>
                    <td><span className={`stock-pill ${status.className}`}>{status.label}</span></td>
                    <td>
                      <button
                        className="delete-button"
                        type="button"
                        onClick={() => handleDelete(product.id)}
                        aria-label={`Delete ${product.name}`}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="23" height="23" fill="none">
              <path d="m4 8 8-4 8 4v8l-8 4-8-4V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="m4.5 8.3 7.5 4 7.5-4M12 12.3V20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </span>
          <h3>{products.length === 0 ? "Your inventory is ready" : "No products found"}</h3>
          <p>{products.length === 0 ? "Add a product to start keeping track of your stock." : "Try searching with a different product name."}</p>
        </div>
      )}
    </section>
  );
};

export default Products;
