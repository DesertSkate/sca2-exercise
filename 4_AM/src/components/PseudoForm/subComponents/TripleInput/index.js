import React from "react"
import {TriPut, TriContain} from "./styles"

const Tripleinput = props => (
    <TriContain>
        <h3>{props.label}</h3>
        <TriPut onChange={props.onChange} placeholder={props.placeholder} name={props.name}/>
        <TriPut onChange={props.onChange} placeholder={props.placeholder} name={props.name2}/>
        <TriPut onChange={props.onChange} placeholder={props.placeholder} name={props.name3}/>
    </TriContain>
)

export default Tripleinput