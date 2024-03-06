import { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';



export default function DataEvaluation () {
    const [evaluations, setEvaluations] = useState([]);

    useEffect(() => {
        async function getEvaluations() {
            try {
                const response = await fetch("http://localhost:8000/api/evl/evaluations", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const _response = await response.json();

                if(response.ok && _response.evaluations) {
                    setEvaluations(_response.evaluations);
                } else {
                    console.log(_response.error);
                }
            }
            catch (error) {
                console.error("Error fetching evaluations", error);
            }
        }
        getEvaluations();
    }, []);

    async function deleteEvaluation(evaluationId) {
        try {
            await fetch (`http://localhost:8000/api/evl/delete/${evaluationId}`, {
                method: "DELETE"
            })
            setEvaluations(evaluations.filter(evaluation => evaluation._id !== evaluationId))
        }
        catch (error) {
            console.log("Error deleting evaluation", error);
        }
    }

    return (
        <Container className="mt-5">
            <Table responsive hover>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Food</th>
                    <th>Service</th>
                    <th>Cleanliness</th>
                    <th>Final</th>
                </tr>
                </thead>
                <tbody>
                {evaluations.map((evaluation) => <tr key={evaluation._id}>
                    <td>{evaluation.visitDateTime}</td>
                    <td>{evaluation.location}</td>
                    <td>{evaluation.foodScore}</td>
                    <td>{evaluation.serviceScore}</td>
                    <td>{evaluation.cleanScore}</td>
                    <td>{evaluation.calculateScore}</td>
                </tr>)}
                </tbody>
            </Table>
        </Container>
    )
}

