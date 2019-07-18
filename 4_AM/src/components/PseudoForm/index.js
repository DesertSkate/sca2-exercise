import React, { Component } from "react"
import {Container} from "./styles"
import TInput from "./subComponents/TextInput";
import RadioButton from "./subComponents/RadioInput"
import Tripleinput from "./subComponents/TripleInput"
import SubmitButton from "./subComponents/SubmitButton"

class StateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            gender: "",
            pronoun: "",
            Hometown: "",
            FavoriteFoods: ["", "", ""],
            birthday: "",
            switchChecks: ["", "", ""]
        }
    }

    updateName = event => {
        event.preventDefault()

        this.setState({name: event.target.value})
    }

    updateBirthday = event => {
        event.preventDefault()

        this.setState({birthday: event.target.value})
    }

    updatePronoun = event => {
        event.preventDefault()

        this.setState({pronoun: event.target.value})
    }

    updateHometown = event => {
        event.preventDefault()

        this.setState({Hometown: event.target.value})
    }

    updateGender = event => {
        switch(event.target.name) {
            case "male":
                this.setState({switchChecks: ["checked", "", ""]})
                break
            case "female":
                this.setState({switchChecks: ["", "checked", ""]})
                break
            case "other":
                this.setState({switchChecks: ["", "", "checked"]})
                break
            default:
                this.setState({switchChecks: ["", "", ""]})
        }

        this.setState({gender: event.target.value})
    }

    updateFavFoods = event => {
        event.preventDefault()

        switch(event.target.name) {
            case "fav1": 
                this.setState({FavoriteFoods: [event.target.value, "", ""]})
                break
            case "fav2": 
                this.setState({FavoriteFoods: [this.state.FavoriteFoods[0], event.target.value, ""]})
                break
            case "fav3":
                this.setState({FavoriteFoods: [this.state.FavoriteFoods[0], this.state.FavoriteFoods[1], event.target.value]})
                break
            default:
                return
        }
    }

    render() {
        return (
            <Container>
                <TInput label="Enter your name:" onChange={this.updateName} placeholder="Name"/>
                <RadioButton name="male" value="male" option="Male" onChange={this.updateGender} checked={this.state.switchChecks[0] === "checked"} top/>
                <RadioButton name="female" value="female" option="Female" onChange={this.updateGender} checked={this.state.switchChecks[1] === "checked"}/>
                <RadioButton name="other" value="other" option="Other" onChange={this.updateGender} checked={this.state.switchChecks[2] === "checked"}/>
                <TInput label="Enter your birthday:" onChange={this.updateBirthday} placeholder="DD/MM/YY"/>
                <TInput label="Enter your pronoun:" onChange={this.updatePronoun} placeholder="Pronoun"/>
                <Tripleinput onChange={this.updateFavFoods} label="Enter your three favorite foods" name="fav1" name2="fav2" name3="fav3"/>
                <TInput label="Enter your Hometown:" onChange={this.updateHometown} placeholder="Hometown"/>
                <SubmitButton/>             
            </Container>
        )
    }
}

export default StateForm