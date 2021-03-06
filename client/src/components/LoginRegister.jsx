import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = {
    input: {
        color: 'white'
    },
    label: {
        color: 'white'
    }
};

class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.logUserIn = this.logUserIn.bind(this);
        this.state = {
            loginUser: '',
            loginPass: '',
            registerUser: '',
            registerEmail: '',
            registerPass: '',
            displayIncorrect: 'none',
            displayInvalidRegistration: 'none'
        }
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        this.logUserIn();
    }

    logUserIn() {
        const { loginUser, loginPass } = this.state;

        axios.post('users/login', {loginUser, loginPass})
            .then((res) => {
                if(res.data.userFound) {
                    this.setState({open: false});
                    this.props.getUserEvents();
                }
                else {
                    this.setState({displayIncorrect: 'block'});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleRegisterSubmit = (e) => {
        e.preventDefault();
        const { registerUser,  registerEmail, registerPass } = this.state;

        axios.post('users/register', {registerUser, registerEmail, registerPass})
            .then((res) => {
                if(res.data.userExists) {
                    this.setState({displayInvalidRegistration: 'block'});
                }
                else {
                    this.setState({loginUser: registerUser, loginPass: registerPass});
                    this.logUserIn();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { classes } = this.props;
        return (  
            <div>
                <Dialog fullScreen open={this.props.openLoginDialog}>
                    <DialogContent style={{backgroundColor: '#3f51b5'}}>
                        <form onSubmit={this.handleLoginSubmit}>
                            <DialogContentText style={{fontSize: '2rem', color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Login</DialogContentText>
                            <DialogContentText style={{color: 'red', textAlign: 'center', display: this.state.displayIncorrect}}>* Incorrect Username or Passsword</DialogContentText>
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="username"
                                name="loginUser"
                                label="Username"
                                onChange={this.onChange}
                                type="text"
                                InputProps={{className: classes.input}}
                                InputLabelProps={{className: classes.label}}
                                style={{marginLeft: '53em', display: 'block'}}
                                required
                            />
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="password"
                                name="loginPass"
                                label="Password"
                                onChange={this.onChange}
                                type="password"
                                InputProps={{className: classes.input}}
                                InputLabelProps={{className: classes.label}}
                                style={{marginLeft: '53em', marginBottom: '3em'}}
                                required
                            />
                            <Button variant="contained" type="submit" style={{display: 'block', color: '#3f51b5', margin: 'auto', marginBottom: '6em'}}>Login</Button>
                        </form>
                        <form onSubmit={this.handleRegisterSubmit}>
                            <DialogContentText style={{fontSize: '2rem', color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Register</DialogContentText>
                            <DialogContentText style={{color: 'red', textAlign: 'center', display: this.state.displayInvalidRegistration}}>* Username or email already in use</DialogContentText>
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="registerUser"
                                name="registerUser"
                                label="Username"
                                onChange={this.onChange}
                                type="text"
                                InputProps={{className: classes.input}}
                                InputLabelProps={{className: classes.label}}
                                style={{marginLeft: '53em', display: 'block'}}
                                required
                            />
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="registerEmail"
                                name="registerEmail"
                                label="Email"
                                onChange={this.onChange}
                                type="email"
                                InputProps={{className: classes.input}}
                                InputLabelProps={{className: classes.label}}
                                style={{marginLeft: '53em', display: 'block'}}
                                required
                            />
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="registerPass"
                                name="registerPass"
                                label="Password"
                                onChange={this.onChange}
                                type="password"
                                InputProps={{className: classes.input}}
                                InputLabelProps={{className: classes.label}}
                                style={{marginLeft: '53em', display: 'block', marginBottom: '3em'}}
                                required
                            />
                            <Button variant="contained" type="submit" style={{display: 'block', color: '#3f51b5', margin: 'auto'}}>Register</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}
 
export default withStyles(styles)(LoginRegister);