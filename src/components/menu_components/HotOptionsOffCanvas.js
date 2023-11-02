import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';

function HotOptions() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Options
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Options</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton id="tbg-radio-2" value={2}>
                                More Sweet
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-3" value={3}>
                                Less Sweet
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    <br/>
                    <Row>
                        <ToggleButtonGroup type="radio" name="options3" defaultValue={6}>
                            <ToggleButton id="tbg-radio-6" value={6}>
                                Add a Shot
                            </ToggleButton>
                            <ToggleButton id="tbg-radio7" value={7}>
                               Decaffeine
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    <br/>
                    <Button>Add to Cart</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default HotOptions;