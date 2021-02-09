import React, {useState} from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import { registerUser } from './../redux/actions/authActionCreators'

const RegisterForm = ({ dispatchRegisterAction }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatchRegisterAction(firstName, lastName, email, password, 
            () => toast.success('Account created successfully!'),
            (message) => toast.error(`Error: ${message}`));
    };

    return (
        <React.Fragment>
            <h2>New User?</h2>
            <h4>Create an account</h4>
            <br />

            <form noValidate onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input noValidate 
                        type="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input noValidate 
                        type="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input noValidate 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                <   label htmlFor="password">Password</label>
                    <input noValidate 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                    Register | <i className="fas fa-user-plus"></i>
                </button>
                <button type="submit" className="btn btn-outline-secondary">
                    Cancel | <i className="fas fa-times"></i>
                </button>
            </form>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchRegisterAction: (firstName, lastName, email, password, onSuccess, onError) => 
        dispatch(registerUser({ firstName, lastName, email, password}, onSuccess, onError))
})

export default connect(null, mapDispatchToProps)(RegisterForm);
