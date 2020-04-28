import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import SignUpForm from './views/Auth/Registration';
import SignInForm from './views/Auth/Login';
Amplify.configure(aws_exports);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedUp : false
        }
        
    }

    handleSignup = () => {
        console.log("Cambio estado signedUp a: " , !this.state.signedUp);
        this.setState({
            signedUp: true
        });
    }
    render() {
        const { signedUp } = this.state;
        return !signedUp ? <SignUpForm handleSignup={ this.handleSignup }/> : <SignInForm />;
    }
}

export default App;
