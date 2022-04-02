import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { editTask } from "../JS/actions/actionTask";


const EditItem = ({ item }) => {
    const [show, setShow] = useState(false);
    const [editInput, setEditInput] = useState(item.description);

    const dispatch = useDispatch()


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={
                            handleClose
                        }
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                                handleClose();
                                dispatch(editTask({ id: item.id, description: editInput }))
                            }
                        }
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditItem;