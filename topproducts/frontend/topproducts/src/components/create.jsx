import React, { useState } from 'react';

function CompanyForm() {
  const [formData, setFormData] = useState({
    company: '',
    category: '',
    numberOfProducts: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    setFormData({
      company: '',
      category: '',
      numberOfProducts: '',
      minPrice: '',
      maxPrice: '',
    });
  };

  return (
    <div>
      <h2>Company Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number of Products:
          <input
            type="number"
            name="numberOfProducts"
            value={formData.numberOfProducts}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Min Price:
          <input
            type="number"
            name="minPrice"
            value={formData.minPrice}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Max Price:
          <input
            type="number"
            name="maxPrice"
            value={formData.maxPrice}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CompanyForm;
