import { useContext } from 'react'
import { ProductContext } from './context/ProductContext.jsx'
import Nav from './inventory_components/Nav'
import Footer from './inventory_components/Footer'
import Create from './inventory_components/Create'
import Products from './inventory_components/Products'
import './App.css'

const App = () => {
  const { products } = useContext(ProductContext)
  const totalUnits = products.reduce((total, product) => total + Number(product.qty || 0), 0)
  const lowStock = products.filter((product) => Number(product.qty) > 0 && Number(product.qty) <= 5).length
  const outOfStock = products.filter((product) => Number(product.qty) === 0).length

  return (
    <div className="app-shell" id="home">
      <Nav />
      <main className="main-content">
        <section className="welcome-row" aria-labelledby="welcome-title">
          <div>
            <p className="eyebrow">Your workspace</p>
            <h1 id="welcome-title">Inventory overview</h1>
            <p className="welcome-copy">A clear view of what you have, all in one place.</p>
          </div>
          <div className="today-label">
            {new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date())}
          </div>
        </section>
        <section className="stats-grid" aria-label="Inventory summary">
          <article className="stat-card">
            <span className="stat-icon stat-icon-green" aria-hidden="true">▦</span>
            <div><p>Total products</p><strong>{products.length}</strong></div>
            <span className="stat-note">in your catalog</span>
          </article>
          <article className="stat-card">
            <span className="stat-icon stat-icon-blue" aria-hidden="true">↗</span>
            <div><p>Units in stock</p><strong>{totalUnits}</strong></div>
            <span className="stat-note">across all products</span>
          </article>
          <article className="stat-card">
            <span className="stat-icon stat-icon-amber" aria-hidden="true">!</span>
            <div><p>Low stock</p><strong>{lowStock}</strong></div>
            <span className="stat-note">5 units or fewer</span>
          </article>
          <article className="stat-card">
            <span className="stat-icon stat-icon-rose" aria-hidden="true">−</span>
            <div><p>Out of stock</p><strong>{outOfStock}</strong></div>
            <span className="stat-note">need restocking</span>
          </article>
        </section>
        <div className="dashboard-grid">
          <Products />
          <Create />
        </div>
      </main>
      <Footer />
    </div>
  )
}


export default App