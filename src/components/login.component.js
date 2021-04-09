import React, {Component} from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {username:"",password:""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
      this.setState({
        password: e.target.value
      })
    }

    handleSubmit(e){
      e.preventDefault();
      this.props.submitLogin(this.state.username,this.state.password);
    }

  render(){
    let alert = "alert-info";
    if(this.props.message === "admin logged")alert = "alert-success"
    else if (this.props.message === "wrong login")alert = "alert-danger"
    return (
      <div>
        <div className={`alert ${alert}`}><h2>{this.props.message}</h2></div>
        <form>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input className="form-control" id="username" onChange={this.onChangeUsername} value={this.state.username} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordField" onChange={this.onChangePassword} value={this.state.password}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                Submit
            </button>
        </form>
      </div>
    );
  }
}