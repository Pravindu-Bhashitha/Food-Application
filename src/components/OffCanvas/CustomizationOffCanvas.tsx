import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';


interface OffCanvasExampleProps {
    name: string;
  }

function OffCanvas({ name, ...props }:OffCanvasExampleProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" {...props}>
        <Offcanvas.Header >
          <Offcanvas.Title style={{color:'#590B21',
          width:'345px', height:'40px' ,fontWeight:'700', fontSize:'22px', lineHeight:'30px', paddingBottom:'10px', borderBottom: '1px solid #E3E8EF'}}>Customizations</Offcanvas.Title>
        </Offcanvas.Header>
        <div style={{fontWeight:'700px'}}>Choice of Protein</div>
        <Offcanvas.Body>
        <Table striped bordered hover>   
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </Offcanvas.Body>
      </Offcanvas>
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


