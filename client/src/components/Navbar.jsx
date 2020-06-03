import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBox';

class Navbar extends Component {
    state = {  }

    render() { 
        const style = {
            background: 'linear-gradient(90deg, rgba(167,0,255,1) 0%, rgba(206,0,143,1) 66%, rgba(224,0,0,1) 100%, rgba(121,9,94,1) 100%)',
        };

        return (  
            <AppBar position="static">
                <Toolbar style={style}>
                    <h1 style={{fontSize: '2rem', margin: 'auto'}}>My Events</h1>
                    <AccountBoxOutlinedIcon fontSize="large" style={{cursor: 'pointer'}}></AccountBoxOutlinedIcon>
                </Toolbar>
            </AppBar>
        );
    }
}
 
export default Navbar;