import {Button, Container} from 'react-bootstrap';
import DataUser from "../components/Data-User";
import {Link} from "react-router-dom";
export default function User () {
    return (
        <Container className="mt-5">
            <div className="mb-4" style={{textAlign: "center"}}>
                Users
            </div>

            <Button as={Link} to="/createuser">
                Add New User
            </Button>

            <DataUser />
        </Container>
    )
}