import React, { Component } from "react";


function ValidationMessage (props){
    if(!props.valid){
        return(
            <div className="alert-danger" role="alert">{props.message}</div>
        )
    }
    return null;
}

class  StandardForm extends Component{
    state={
        username : '', usernameValid: false,
        email: '', emailValid : false,
        password: '', passwordValid: false,
        confirmPassword: '', confirmPasswordValid: false,
        formValid: false,
        errMsg:{}
    }

    validateForm = () =>{
        const { usernameValid, emailValid, passwordValid, confirmPasswordValid }=this.state;
        this.setState({
            formValid: usernameValid && emailValid && passwordValid && confirmPasswordValid
        });
    }

    validateUsername =()=>{
        const {username} = this.state;
        let usernameValid=true;
        let errMsg ={...this.state.errMsg}

        if( username.length <6 || username.length>15){
            usernameValid=false;
            errMsg.username="Username should be between 6 and 15 character"
        }
        this.setState({usernameValid,errMsg}, this.validateForm)
    }
    validateEmail=()=>{
        const{email}=this.state;
        let emailValid =true;
        let errMsg={...this.state.email}

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            emailValid=false;
            errMsg.email="Incorrect Email password"
        }
        this.setState({emailValid,errMsg}, this.validateForm)
    }
    validatePassword =()=>{
        const{password}=this.state;
        let passwordValid =true;
        let errMsg={...this.state.password}

        if(password.length<8){
            passwordValid=false;
            errMsg.password="Password should be atleast 8 character";

        }
        this.setState({passwordValid,errMsg}, this.validateForm)

    }

    validateConfirmPassword =()=>{
        const {confirmPassword,password}=this.state;
        let confirmPasswordValid=true;
        let errMsg={...this.state.confirmPassword}

        if(password!==confirmPassword){
            confirmPasswordValid=false;
            errMsg.confirmPassword="Incorrect Password"
        }
        this.setState({confirmPasswordValid,errMsg}, this.validateForm)
    }

    resetform(){
        this.setState({
            username : '', usernameValid: false,
            email: '', emailValid : false,
            password: '', passwordValid: false,
            confirmPassword: '', confirmPasswordValid: false,
            formValid:false,
            errMsg:{}
        })
    }
    render(){
        return(
            <div>
              <h1>Standard Form</h1>
              <form>
                <div className="form-group">
                    <label htmlFor="Username">Username</label>
                    <input type="text"  className="form-control" id="username" value={this.state.username} onChange={(e)=> this.setState({username: e.target.value},this.validateUsername)}/>
                    <span><ValidationMessage valid={this.state.usernameValid}
                           message={this.state.errMsg.username}/></span>
                </div>

                <div className="form-group" >
                    <label htmlFor="email">Email</label>
                    <input type="email"  className="form-control" id="email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value},this.validateEmail)}/>
                    <span><ValidationMessage valid={this.state.emailValid}
                           message={this.state.errMsg.email}/></span>
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input type="password"  className="form-control" id="password" value={this.state.password} onChange={(e)=>this.setState({password: e.target.value},this.validatePassword)}/>
                    <span><ValidationMessage valid={this.state.passwordValid}
                           message={this.state.errMsg.password}/></span>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password </label>
                    <input type="password"  className="form-control" id="confirmPassword" value={this.state.confirmPassword} onChange={(e)=>this.setState({confirmPassword: e.target.value},this.validateConfirmPassword)}/>
                    <span><ValidationMessage valid={this.state.confirmPasswordValid}
                           message={this.state.errMsg.confirmPassword}/></span>
                </div>
                <div className="btn-group">
                    <button className="btn btn-primary" type="submit" disabled={!this.state.formValid}>Submit</button>
                    <button className="btn btn-danger" onClick={this.resetform=this.resetform.bind(this)}>Reset</button>
                </div>
                <p>Username:{this.state.username}</p>
              </form>
            </div>
        );
    }


}

export default StandardForm;
