import React, { Component } from "react"
import Welcome from "../../components/Welcome"
import StateForm from "../../components/PseudoForm"

class Form extends Component {
  render() {
    // Currently, this only renders the welcome component. Create a form, and various form components and place them here
    return (
      <div>
        <Welcome />
        <StateForm />
      </div>
    )
  }
}

export default Form
