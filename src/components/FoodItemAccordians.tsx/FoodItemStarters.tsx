import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { foodData } from "../../dummy data/FoodItemData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  accordionBodyStyle,
  accordionContainerStyle,
  accordionContentStyle,
  accordionHeaderStyle,
  accordionTitleStyle,
  addNewStyle,
  buttonStyle,
  foodNameStyle,
  imageStyle,
  nameInputFieldStyle,
  priceInputFieldStyle,
  priceStyle,
  textStyle,
} from "./AccordionStyling";

const FoodItemStarters = () => {
  const [accordionId, setAccordionId] = useState(0);

  const handleOpenAccordion = (index: any) => {
    if (index === accordionId) {
      setAccordionId(-1);
      return;
    }
    setAccordionId(index);
  };

  return (
    <div style={accordionContainerStyle}>
      <h4 style={accordionTitleStyle}>Starters</h4>
      {foodData.map((food) => {
        return (
          <div key={food.id} style={accordionContentStyle}>
            <div
              className="card-body d-flex"
              id={food.id.toString()}
              onClick={() => handleOpenAccordion(food.id)}
              style={accordionHeaderStyle}
            >
              <img src={food.image} alt={food.name} style={imageStyle} />
              <div style={textStyle}>
                <span style={foodNameStyle}>{food.name}</span>
                <span style={priceStyle}>LKR {food.price}</span>
              </div>
            </div>
            {accordionId === food.id && (
              <div
                className="d-flex gap-justify-content-between"
                style={accordionBodyStyle}
              >
                <form className="d-flex">
                  <input
                    type="text"
                    value={food.name}
                    readOnly
                    style={nameInputFieldStyle}
                  />
                  <input
                    type="text"
                    value={food.price}
                    readOnly
                    style={priceInputFieldStyle}
                  />
                </form>
                <div>
                  <button className="btn me-2" style={buttonStyle}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "#12B76A" }}
                    />
                  </button>
                  <button
                    className="btn"
                    style={{
                      border: "2px solid #F04438",
                      borderRadius: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      style={{ color: "#F04438" }}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <Button style={addNewStyle}>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ marginRight: "10px", fontFamily: "'Nunito', sans-serif" }}
        />
        Add New
      </Button>
    </div>
  );
};

export default FoodItemStarters;
