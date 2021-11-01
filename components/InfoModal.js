import React from 'react';
import {
	Button,
	Modal,
	FormControl,
	Input,
} from "native-base";

const InfoModal = ({ showModal, setShowModal }) => {
    
    return (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Información</Modal.Header>
                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Nombre</FormControl.Label>
                        <Input value="Ricardo Daniel" isReadOnly/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Apellido</FormControl.Label>
                        <Input value="Gaona Machuca" isReadOnly />
                    </FormControl>
                    <FormControl mt="3">
                        <FormControl.Label>Email</FormControl.Label>
                        <Input value="gaonaricardo06@gmail.com" isReadOnly />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button
                            variant="ghost"
                            colorScheme="blueGray"
                            onPress={() => {
                                setShowModal(false)
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={() => {
                                setShowModal(false)
                            }}
                            style={{backgroundColor: '#ff0000'}}
                        >
                            Logout
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}

export default InfoModal
