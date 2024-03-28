import Dropdown from 'react-bootstrap/Dropdown';

const Drop_Down_Menu = () => {
    return (
        <div >
            <Dropdown  style={dropdownStyles}>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
                    All Locations
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" active>
                        Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

const dropdownStyles = {
    // width: '11rem'
    color:'#333'
};

export default Drop_Down_Menu;
