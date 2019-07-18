import React from "react"
import {Radio, Option} from "./styles"

const RadioButton = (props) => (
    <div>
        {props.top ? (<h2>Choose your gender: </h2>) : ""}
        <Radio type="radio" name={props.name} value={props.value} onChange={props.onChange} checked={props.checked} top={props.top}/><Option>{props.option}</Option>
    </div>
)

export default RadioButton