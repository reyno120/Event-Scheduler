import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBox';
import Drawer from '@material-ui/core/Drawer';
import { Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { List, ListItem } from '@material-ui/core';
import axios from 'axios';


class Navbar extends Component {
    state = {  
        open: false
    };

    handleClickOpen = () => {
        this.setState({open: true});
    }

    handleClickClose = () => {
        this.setState({open: false});
    }

    handleLogout = () => {
        console.log("logging out");
        axios.get('/auth/logout')
            .then(res => {
                window.location.reload();
            });
            // .catch(error => {
            //     if (error) throw error;
            // });

    }

    render() { 
        const style = {
            // background: 'linear-gradient(90deg, rgba(167,0,255,1) 0%, rgba(206,0,143,1) 66%, rgba(224,0,0,1) 100%, rgba(121,9,94,1) 100%)',
            backgroundColor: 'background: linear-gradient(90deg, rgba(194,194,194,1) 0%, rgba(59,59,59,1) 100%, rgba(116,116,116,1) 100%)',
            color: 'white' 
        };

        return (
            <div>
                <AppBar position="static">
                    <Toolbar style={style}>
                        <h1 style={{fontSize: '2rem', margin: 'auto'}}>My Events</h1>
                        <AccountBoxOutlinedIcon fontSize="large" style={{cursor: 'pointer'}} onClick={this.handleClickOpen}></AccountBoxOutlinedIcon>
                    </Toolbar>
                </AppBar>
                <Drawer anchor='right' open={this.state.open} variant="temporary" onClose={this.handleClickClose}>
                    <List>
                        <ListItem button onClick={this.handleLogout}>
                            <ExitToAppIcon color="primary"></ExitToAppIcon>
                            <Typography style={{paddingLeft: '2em', marginRight: '3em'}}>
                                Logout
                            </Typography>
                        </ListItem>
                    </List>
                </Drawer>
            </div>  
        );
    }
}
 
export default Navbar;