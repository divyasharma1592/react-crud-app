import React, { Component } from 'react';
import { User } from '../../core/type/AppStateType';
import { FaEdit, FaPlusCircle, FaTrash } from 'react-icons/fa';
import UpdateUser from '../UpdateUser/UpdateUser';
import ConfirmModal from '../../core/common/ConfirmationModal';
import './UserList.css';

interface IProps {
  elementValue: any;
  history: any;
}

interface IState {
  user: Array<User>;
  edit: boolean;
  item: any;
  confirmOpen: boolean;
}


class UserList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem('EmployeeData') || '{}'),
      edit: false,
      item: { name: "", email: "" },
      confirmOpen: false,
    }
  }
  handleChange = (field: string) => {
    return (event: { target: { value: any; }; }) => {
      this.setState({ [field]: event.target.value } as Pick<IState, any>);
    };
  };

  handleDelete = (index: number, item: any) => {
    this.setState({
      user: this.state.user,
      confirmOpen: !this.state.confirmOpen,
      item: item
    });
  }

  deleteUser = (index: number, item: any, e: any) => {
    this.state.user.splice(this.state.user.indexOf(this.state.item), 1);
    this.setState({
      confirmOpen: !this.state.confirmOpen,
    });
    localStorage.setItem("EmployeeData", JSON.stringify(this.state.user));
  }

  handleEdit = (index: number, item: any) => {
    this.setState({
      edit: true,
      item: item
    });
  }


  handleCallback = (childData: any) => {
    let data = JSON.parse(childData);
  }


  addUser = () => {
    this.props.history.push("/");
  }

  render() {
    return (

      <div className="container">
        <h2 className="text-center">Employee List</h2>
        <form className='form-inline'>
          <FaPlusCircle size={35}
            onClick={() => this.addUser()}
            style={{ position: 'absolute', right: '10%', bottom: '86%', color: '#000000' }} />

        </form>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th> Update</th>
              <th> Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.length > 0
              && this.state.user.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td> {item.name} </td>
                      <td> {item.email} </td>
                      <td> <FaEdit onClick={() => this.handleEdit(index, item)} /></td>
                      <td> <FaTrash onClick={() => this.handleDelete(index, item)} /></td>
                    </tr>
                  </>
                );
              }
              )}
            {this.state.edit && <UpdateUser elementValue={this.state.item} history={this.props}
              parentCallback={this.handleCallback}
            />}
          </tbody>
        </table>

        <ConfirmModal
          content="Do you want to delete this user ?"
          open={this.state.confirmOpen}
          onConfirm={this.deleteUser}
        />

      </div>
    )
  }
}
export default UserList;
