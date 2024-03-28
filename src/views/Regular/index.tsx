import React from 'react'
import { Form } from "react-bootstrap";
import FoodItemStarters from '../../components/FoodItemAccordians.tsx/FoodItemStarters';
import FoodItemSides from '../../components/FoodItemAccordians.tsx/FoodItemSides';

const Regular = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", 
      }}
    >
      <div style={{ width: "600px" }}>
        <div
          className="content mt-3 d-flex justify-content-between align-items-center "
          style={{ width: "100%" }}
        >
      <h2 style={{ fontFamily: "'Baloo 2', cursive" }}>Menu</h2>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </div>

        <div
          className="food-items-container"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <FoodItemStarters/>

        </div>

        <div
          className="food-items-container"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <FoodItemSides />
        </div>
      
      </div>
    </div>
  )
}

export default Regular;
