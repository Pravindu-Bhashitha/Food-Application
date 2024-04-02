import React from "react";
import { Form } from "react-bootstrap";
import FoodItemStarter from "../../components/FoodItemAccordians.tsx/FoodItemStarters";
import FoodItemSides from "../../components/FoodItemAccordians.tsx/FoodItemSides";
import "./index.css";

export default function RegularMenu() {
  return (
    <div className="regular-menu-container">
      <div className="menu-header">
        <div className="menu-content">
          <h2 className="menu-title">Menu</h2>
          <Form className="menu-search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </div>
        <div className="food-items-container">
          <FoodItemStarter />
        </div>
        <div className="food-items-container">
          <FoodItemSides />
        </div>
      </div>
    </div>
  );
}
