import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
interface OffCanvasExampleProps {
  name: string;
}

function OffCanvas({ name, ...props }: OffCanvasExampleProps) {
  const [show, setShow] = useState(false);
  const [customizations, setCustomizations] = useState([
    { name: "Vegetables", price: 15.75 },
    { name: "Tofu", price: 15.75 },
    { name: "Organic Chicken", price: 15.75 },
    { name: "Organic Pork", price: 15.75 },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <div>
      <Offcanvas show={show} onHide={handleClose} placement="end" {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title
            style={{
              color: "#590B21",
              width: "345px",
              height: "40px",
              fontWeight: "700",
              fontSize: "22px",
              lineHeight: "30px",
              paddingBottom: "10px",
              borderBottom: "1px solid #E3E8EF",
            }}
          >
            Customizations
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div
            style={{
              fontWeight: "700px",
              fontSize: "18px",
              lineHeight: "24px",
              paddingBottom: "10px",
              color:'#1C1C1B'
            }}
          >
            Choice of Protein
          </div>
          <table style={{width:'350px', height:'140px',  border:'none'}} >
            <tbody>
              {customizations.map((customization) => (
                <tr key={customization.name}>
                  <td>{customization.name}</td>
                  <td >{customization.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{paddingTop:'20px'}}>
          <Button
            style={{
              width: "200px",
              height: "40px",
              marginTop: "2px",
              background: "white",
              color: "red",
              border: "1px solid red",
            }}
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                marginRight: "10px",
                fontFamily: "'Nunito', sans-serif",
              }}
            />
            Customization
          </Button>
          </div>
          
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  );
}

export default function CustomizationOffCanvas() {
  return (
    <div>
      <OffCanvas name="end" />
    </div>
  );
}
