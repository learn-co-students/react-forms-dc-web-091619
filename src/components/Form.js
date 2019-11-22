import React from 'react';
export default class Form extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          />
          <input type="submit"></input>
        </form>
      </div>
    )
  }

  // With Parent Component
  
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: []
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }
  // // Controlled Form
  // // handleSubmit = event => {
  // //   event.preventDefault()
  // //   let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
  // //   let dataArray = this.state.submittedData.concat(formData)
  // //   this.setState({submittedData: dataArray})
  // // }

  // //Uncontrolled Form
  // handleSubmit = event => {
  //   event.preventDefault()
  //   const firstName = event.target.children[0].value
  //   const lastName = event.target.children[1].value
  //   let formData = {firstName: firstName, lastName: lastName}
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data=> {
  //   return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  // //Controlled Form
  // // render() {
  // //   return (
  // //     <div>
  // //       <form onSubmit={event => this.handleSubmit(event)}>
  // //         <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
  // //         <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
  // //         <input type="submit"/>
  // //       </form>
  // //       {this.listOfSubmissions()}
  // //     </div>
  // //   )
  // // }

  // //Uncontrolled Form
  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={event => this.handleSubmit(event)}>
  //         <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)}/>
  //         <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} />
  //         <input type="submit"/>
  //       </form>
  //       {this.listOfSubmissions()}
  //     </div>
  //   )
  // }
}


