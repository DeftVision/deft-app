import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Admin() {
    return (
        <Container className="mt-5">
            <div className="mb-4" style={{textAlign: "center"}}>
                Admin
            </div>

            <ListGroup variant={"flush"}>
                <ListGroup.Item as={Link} to="/announcement">
                    Announcements
                </ListGroup.Item>
                <ListGroup.Item as={Link} to="/docsforms">
                    Documents & Forms
                </ListGroup.Item>
                <ListGroup.Item as={Link} to="/evaluation">
                    Evaluations
                </ListGroup.Item>
                <ListGroup.Item as={Link} to="/user">Users</ListGroup.Item>
            </ListGroup>
        </Container>
    )
}