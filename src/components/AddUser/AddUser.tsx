import React from 'react';
import { FaList } from 'react-icons/fa';
import { User } from '../../core/type/AppStateType';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  history:any;
  elementValue:any;
}
  
interface IState {
  name: string;
  email:string;
  id:string ;
  user:Array<User>;
}
  
class AddUser extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      user: localStorage.getItem('EmployeeData') ? 
          JSON.parse(localStorage.getItem('EmployeeData') || '{}') : [],
      name: '',
      email: '',
      id: ''
    };
  }

  handleChange = (field: string) => {
    return (event: { target: { value: any; }; }) => {
      this.setState({ [field]: event.target.value } as Pick<IState, any>);
    };
  };


  handleSubmit = () => {
    this.state.user.push({
      id: uuidv4(),
      name: this.state.name,
      email: this.state.email,
    })
    localStorage.setItem("EmployeeData", JSON.stringify(this.state.user));
    this.props.history.push("/userList");
  }

goToEmployeeList = () =>{
  this.props.history.push("/userList");
}

    render() {

      const buttonstyle = {
        marginTop: 20
      }
      return (
        <div className="container">
            <div className="py-4">
                <form onSubmit={this.handleSubmit}>
                    {this.state.user.length > 0 && <FaList size={35} 
                        onClick={() => this.goToEmployeeList()} 
                        style={{position: 'absolute',right:'15%', bottom: '86%', color: '#000000'}}/>}

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"
                          className="form-control"
                         onChange={this.handleChange('name')} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" 
                        className="form-control"
                         onChange={this.handleChange('email')} />
                    </div>

                    <div className="btn-group">
                      <button type="submit" className='btn btn-primary'style ={buttonstyle}>Add User</button>
                    </div>
                </form>
              </div>
        </div>
    )
  }
}
export default AddUser;
