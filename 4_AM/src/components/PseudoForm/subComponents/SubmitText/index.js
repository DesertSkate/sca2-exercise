import React from "react"
import {Text} from "./styles"

const SubmitText = props => (
    <Text>User's name is {props.data["name"]}, and {props.data["pronoun"]} is from {props.data["Hometown"]}. {props.data["pronoun"]} was born on {props.data["birthday"]}, 
    and {props.data["pronoun"]} favorite foods is {props.data.FavoriteFoods[0]}, {props.data.FavoriteFoods[1]}, and {props.data.FavoriteFoods[2]}.</Text>
)

export default SubmitText