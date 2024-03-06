import { Container, Table, Button, Modal } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";

export default function DataUser () {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    const modalClose = () => {
        setShow(false)
    };
    const modalShow = () => {
        setShow(true);
    }


    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch("http://localhost:8000/api/usr/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const _response = await response.json();

                if (response.ok && _response.users) {
                    setUsers(_response.users);
                } else {
                    console.log(_response.error);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        getUsers();
    }, [])

    async function deleteUser(userId) {

        try {
            await fetch(`http://localhost:8000/api/usr/delete/${userId}`, {
                method: "DELETE"

            })
            setUsers(users.filter(user => user._id !== userId));
            modalClose();
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <Container>
            <Table responsive hover striped={false} borderless={false}>
                <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => <tr key={user._id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>
                        {<Button as={Link}
                                 to={`/edituser/${user._id}`}
                                 variant={"btn"}>
                            <FaIcons.FaEdit style={{color: "dodgerblue"}}/>
                        </Button>}

                        {<Button variant={"btn"} onClick={modalShow}>
                            <FaIcons.FaTrash style={{color: "#aaa"}}/>
                        </Button>}

                        <Modal show={show} onHide={modalClose} backdrop={false}>
                            <Modal.Body closeButton>Are you sure you want to delete this record?</Modal.Body>
                            <Modal.Footer>
                                <Button variant={"btn btn-outline-success"}
                                        onClick={() => deleteUser(user._id)}>Yes</Button>
                                <Button variant={"btn btn-outline-danger"} onClick={modalClose}>Cancel</Button>
                            </Modal.Footer>
                        </Modal>
                    </td>
                </tr>)}
                </tbody>
            </Table>
        </Container>
    );
}

