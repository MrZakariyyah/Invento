import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext.jsx";

const Create = () => {
  const { setProducts } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const productName = name.trim();
    const quantity = Number(qty);

    if (!productName || !Number.isInteger(quantity) || quantity < 0) return;

    setProducts((currentProducts) => [
      ...currentProducts,
      { name: productName, qty: quantity, id: Date.now() },
    ]);
    setName("");
    setQty("");
  }

  return (
    <aside className="panel create-panel" aria-labelledby="add-product-title">
      <div className="panel-heading">
        <h2 id="add-product-title">Add a product</h2>
        <p>Keep your inventory up to date.</p>
      </div>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="product-name">Product name</label>
          <input
            id="product-name"
            type="text"
            placeholder="e.g. Ceramic coffee mug"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            maxLength={80}
          />
        </div>
        <div className="form-field">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            id="product-quantity"
            type="number"
            placeholder="Enter quantity"
            value={qty}
            onChange={(event) => setQty(event.target.value)}
            min="0"
            step="1"
            required
          />
        </div>
        <button className="add-button" type="submit">
          <svg aria-hidden="true" viewBox="0 0 20 20" width="17" height="17" fill="none">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          Add to inventory
        </button>
      </form>
    </aside>
  );
};

export default Create;
