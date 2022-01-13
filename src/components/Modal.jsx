import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";


function ModalSucess () {

    const [show, setShow] = useState(false);

    const handleShow = setShow(true)
    const handleClose = setShow(false);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sucesso</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
};

export default ModalSucess;