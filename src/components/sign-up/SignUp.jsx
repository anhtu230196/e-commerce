import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/actions/userAction';
import CustomBottom from '../custom-button/CustomBottom';
import FormInput from '../form-input/FormInput';
import "./SignUp.scss"

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required />
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required />

                    <CustomBottom>SIGN UP</CustomBottom>
                </form>
            </div>
        );
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { email, confirmPassword, password } = this.state
        if (password !== confirmPassword) {
            alert("Password don't match")
            return
        }
        this.props.dispatch(setCurrentUser(email, password, "isSignup"))
    }

}

export default connect()(SignUp);