import React from 'react';
import { Form } from "react-bootstrap";
import FoodItemStarters from '../../components/FoodItemAccordians.tsx/FoodItemStarters';
import FoodItemSides from '../../components/FoodItemAccordians.tsx/FoodItemSides';
import './index.css'; // Import the CSS file

const Regular = () => {
  return (
    <div className="resource-container">
      <div className="resource-content">
        <div className="content mt-3 d-flex justify-content-between align-items-center">
          <h2 className="resource-title">Menu</h2>
          <Form className="resource-search-form d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </div>
        <div className="food-items-container">
          <FoodItemStarters />
        </div>
        <div className="food-items-container">
          <FoodItemSides />
        </div>
      </div>
    </div>
  );
}

export default Regular;
