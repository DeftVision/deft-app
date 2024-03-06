import { Container, Button, Form } from 'react-bootstrap';
import {Link} from "react-router-dom";
import DataEvaluation from "../components/Data-Evaluation";




export default function Evaluation() {
    return (
        <Container className="mt-5">
        <div className="mb-4" style={{textAlign: "center"}}>
            Evaluations
        </div>

    <Button as={Link} to="/createevaluation">
        Add Store Visit
    </Button>

            <DataEvaluation/>
        </Container>
    )
}