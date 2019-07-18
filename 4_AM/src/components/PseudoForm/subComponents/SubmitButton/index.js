import React from "react"
import {Container, Button} from "./styles"

const SubmitButton = props => (
    <Container>
        <Button onClick={props.onClick}>Submit</Button>
    </Container>
)

export default SubmitButton