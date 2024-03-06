import { Container } from 'react-bootstrap';
import { RotatingLines} from "react-loader-spinner";

export default function Loading () {
    return (
        <Container className="mt-5">
            <div className="mb-4" style={{textAlign: "center"}}>
                <RotatingLines
                    strokeColor="lightblue"
                    strokeWidth="3"
                    animationDuration="1"
                    width="96"
                    visible={true}
                />
            </div>
        </Container>
)
}