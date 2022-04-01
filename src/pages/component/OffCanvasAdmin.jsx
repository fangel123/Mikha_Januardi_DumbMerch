import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import cssModule from './adminComplain.module.css'
import logo_dumbmerch from './images/Logo_Dumbmerch.png'
import chat1 from "./images/chat1_admin.png";
import chat2 from "./images/chat2_admin.png";

function OffCanvasAdmin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} className={cssModule.btnOpen}>
                Open Contact
            </Button>

            <Offcanvas className={cssModule.offcanvas} show={show} onHide={handleClose}>
                <Offcanvas.Header className={cssModule.offcanvasHeader} closeButton>
                    <Offcanvas.Title><img src={logo_dumbmerch}  alt=''/></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={cssModule.offcanvasBody}>
                    <img src={chat1} alt=''/>
                    <img src={chat2} alt=''/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasAdmin