import React from "react"
import {Radio, Option, Container} from "./styles"

const RadioButton = (props) => (
    <Container>
        {props.top ? (<h2>Choose your gender: </h2>) : ""}
        <Radio type="radio" name={props.name} value={props.value} onChange={props.onChange} checked={props.checked} top={props.top}/><Option>{props.option}</Option>
    </Container>
)

export default RadioButton