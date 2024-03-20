import React, { useState } from 'react';
import Footer from './footer';
import Header from './header';

function ProductSearch() {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [products, setProducts] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      company: company,
      category: category,
      min_price: minPrice,
      max_price: maxPrice,
      no_of_products: products
    };

    fetch('http://127.0.0.1:8000/get-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setList(data);
      })
      .catch(err => {
        setError(err);
      });
  }

  return (
    <div>
      <Header />
      <h2>Product Search</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company:
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          No of Products:
          <input
            type="number"
            value={products}
            onChange={(e) => setProducts(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>

      {error && <div>Error: {error.message}</div>}
      <div>
        <h3>Product List</h3>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <p>Product Name: {item.productName}</p>
              <p>Price: {item.price}</p>
              <p>Rating: {item.rating}</p>
              <p>Discount: {item.discount}</p>
              <p>Availability: {item.availability}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ProductSearch;
