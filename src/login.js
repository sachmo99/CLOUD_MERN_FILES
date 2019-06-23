import React from 'react';
class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username:'',
      isloggedin:false,
      visibility1:false
    }
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({username:e.target.value.toUpperCase()});
  }
  handleSubmit = e => {
    //alert('A name is entered!' + this.state.username);
    this.setState({isloggedin:true});
    console.log(this.state.username);
    e.preventDefault();


  }
  handleLogout = e => {
    this.setState({username:"",isloggedin:false});
    e.preventDefault();

  }
  introscreenswap(event) {
    if(this.state.isloggedin){
      //setValue()


    }
  }
  render(){
    let loginscreen = (
      <div id="loginscreen"><label for="username" >Please enter your name:
    <input type="text" id="username" value={this.state.value} onChange={this.handleChange} />
    </label>
    <input type="button" value="click me" onClick={this.handleSubmit} />
  </div>);
    let welcomescreen = (<div id="welcomescreen">
      <h1>Welcome Mr.{this.state.username}</h1>
      <input type="button" value="logout!" onClick={this.handleLogout} />
    </div>);
    return (
      <div className="root">
        {!this.state.isloggedin?loginscreen:welcomescreen}

      </div>
    )
  }

}
export default Login;
