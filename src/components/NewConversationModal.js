import {Button, Form, Modal} from "react-bootstrap";
import {useRef} from "react";
import {useContacts} from "../context/ContactsProvider";

export default function NewConversationModal({closeModal}){
    const idRef=useRef()
    const nameRef=useRef()
    const {createContact}=useContacts()
    function handleSubmit(e){
        e.preventDefault()
        createContact(idRef.current.value,nameRef.current.value)
        closeModal()
    }
    return(
        <>
        <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type='text' ref={idRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' ref={nameRef} required></Form.Control>
                    </Form.Group>
                    <Button className='m-2' type='submit'>Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}