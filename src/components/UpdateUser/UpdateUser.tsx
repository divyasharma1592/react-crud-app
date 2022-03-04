import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  elementValue: any;
  history: any;
  parentCallback: any;
}

interface IState {
  name: string;
  email: string;
}

class UpdateUser extends Component<IProps, IState>  {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: this.props.elementValue.name,
      email: this.props.elementValue.email
    };
  }

  updateData = (e: any) => {
    const userData = JSON.parse(localStorage.getItem('EmployeeData') || '{}');
    const myData = userData.map((user: any) => {
      if (user.id === this.props.elementValue.id) {
        return {
          ...user,
          name: this.state.name,
          email: this.props.elementValue.email,
          id: uuidv4()
        }
      }
      return user;
    })

    this.setState({
      name: this.state.name,
      email: this.state.email
    }, () => {
    });

    localStorage.setItem("EmployeeData", JSON.stringify(myData));
    window.location.reload();
    this.props.parentCallback(JSON.stringify(this.state));
  }

  handleChange = (field: string) => {
    console.log(field);
    return (event: { target: { value: any; }; }) => {
      this.setState({ [field]: event.target.value } as Pick<IState, any>);
    };
  };

  render() {
    
    const buttonstyle = {
      marginTop: 20
    }
    return (
      <div className="container">
        <div className="py-4">
          <form onSubmit={this.updateData}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name"
                value={this.state.name}
                className="form-control"
                onChange={this.handleChange('name')} />

            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email"
                value={this.state.email}
                className="form-control"
                onChange={this.handleChange('email')} />
            </div>
            <button type="submit" className="btn btn-primary" style ={buttonstyle}>Update</button>
          </form>
          <div className="container">
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateUser;
