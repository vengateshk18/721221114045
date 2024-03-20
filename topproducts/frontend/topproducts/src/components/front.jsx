import React, { useState } from 'react';
import Footer from './footer';
import Header from './header';
function ProductSearch() {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [list,setList]=useState([])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data=new FormData()
    data.append("company",company)
    data.append("category",category)
    data.append("min_price",minPrice)
    data.append("max_price",maxPrice)
    data.append("no_of_products",products)
    fetch('http://127.0.0.1:8000/get-products',{
        method:'POST',
        headers :{
            "Content-Type": "application/json"
        },
        body:data
    }).then(res=>res.json()).then(data=>{
        setList(data)
    }).catch(err=>{
        console.log(err)
    })
  }
  return (
    <div>
        <Header/>
      <h2>Product Search</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company:
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          No of Products:
          <input
            type="number"
            value={products}
            onChange={(e) => setProducts(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
      <Footer/>
    </div>
  );
}

export default ProductSearch;
