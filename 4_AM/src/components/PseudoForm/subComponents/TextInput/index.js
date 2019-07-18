import React from "react";
import {TextInput} from "./styles";

const TInput = (props) => (
    <div>
        <h2>{props.label}</h2>
        <TextInput onChange={props.onChange} placeholder={props.placeholder}/>
    </div>
)

export default TInput