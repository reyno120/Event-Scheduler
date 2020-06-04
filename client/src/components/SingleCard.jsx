import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';
import axios from 'axios';

class SingleCard extends Component {
        constructor(props) {
            super(props);
            this.handleClickOpen = this.handleClickOpen.bind(this);
            this.handleClickClose = this.handleClickClose.bind(this);
            this.state = {
                open: false,
                setOpen: false,
                eventName: this.props.eventName,
                eventLoc: this.props.eventLoc,
                eventDate: this.props.eventDate,
                eventTime: this.props.eventTime,
                eventReminder: this.props.eventReminder,
                objectId: this.props.objectId
            }
        }

        // Handle Click event
        handleClickOpen = () => {
            this.setState({open: true});
        }

        handleClickClose = () => {
            this.setState({open: false});
        }

        handleSubmit = () => {
            const { eventName, eventLoc, eventDate, eventTime, eventReminder, objectId } = this.state;
    
            axios.post('event/update', {eventName, eventLoc, eventDate, eventTime, eventReminder, objectId})
                .then((res) => {
                    console.log("Posted Update!");
                });
        }
    
        onChange = (e) => {
            this.setState({[e.target.name]: e.target.value});
        }

    render() {

        // Constructing date display
        var fullTime = this.props.eventTime;
        var hour = parseInt(this.props.eventTime);

        if(hour >= 13) {    //pm
            hour -= 12;
            hour = hour.toString();
            fullTime = hour + fullTime.substring(2) + " PM";
        }
        else if(hour === 12) {   // noon
            fullTime = fullTime + " PM";
        }
        else if(hour === 0) {    // midnight
            hour += 12;
            hour = hour.toString();
            fullTime = hour + fullTime.substring(2) + " AM";
        }
        else {  //am
            fullTime = fullTime + " AM";
        }

        // Display a prettier date using moment.js
        const eventDate = moment(this.props.eventDate).format('MMMM Do YYYY');

        // Obtain state values for form
        const { eventName, eventLoc, eventTime, eventReminder } = this.state;

        return (
            <div>
                <Dialog open={this.state.open} onClose={this.handleClickClose} onBackdropClick={this.handleClickClose}>
                    <DialogTitle 
                        id="form-dialog-title" 
                        style={{textAlign: 'center', color: '#3f51b5'}}>
                        Edit Details for: <span style={{textDecoration: 'underline'}}>{this.props.eventName}</span>
                    </DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="eventName"
                                label="Event Name"
                                onChange={this.onChange}
                                type="text"
                                fullWidth
                                required
                            />
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="eventLoc"
                                label="Location"
                                onChange={this.onChange}
                                type="text"
                                fullWidth
                                required
                            />
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="eventDate"
                                onChange={this.onChange}
                                type="date"
                                fullWidth
                                required
                            />
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="eventTime"
                                onChange={this.onChange}
                                type="time"
                                fullWidth
                                required
                            />
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="eventReminder"
                                label="Set Reminder"
                                onChange={this.onChange}
                                select
                                fullWidth
                            >
                                <MenuItem>At time of event</MenuItem>
                                <MenuItem>1 hour</MenuItem>
                                <MenuItem>2 hours</MenuItem>
                                <MenuItem>1 Week</MenuItem>
                                <MenuItem>2 Week</MenuItem>
                            </TextField>
                            <TextField 
                                autoFocus
                                margin="dense"
                                id="eventDesc"
                                label="Description"
                                onChange={this.onChange}
                                type="text"
                                fullWidth
                                required
                            />
                            <DialogActions>
                                <Button type="submit" color="primary" variant="contained" style={{margin: 'auto'}}>Submit!</Button>
                            </DialogActions>
                        </form>
                    </DialogContent>
                </Dialog>
                    <Card>
                        <CardContent>
                            <Typography style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '.5em', lineHeight: '45px'}}>
                                {this.props.eventName}
                            </Typography>
                            <Typography style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '.3em', textDecoration: 'underline'}}>
                                {eventDate}
                            </Typography>
                            <Typography style={{textAlign: 'center'}}>
                                {this.props.eventLoc}
                            </Typography>
                            <Typography style={{textAlign: 'center'}}>
                                {fullTime}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" style={{marginLeft: '4.5em'}} onClick={this.handleClickOpen}>Edit Details</Button>
                        </CardActions>
                        <CardActions disableSpacing>
                            <InfoOutlinedIcon style={{cursor: 'pointer'}} onClick={this.handleClick}></InfoOutlinedIcon>
                            <DeleteIcon style={{cursor: 'pointer', marginLeft: '9em'}}></DeleteIcon>
                        </CardActions>
                    </Card>
            </div>  
        );
    }
}
 
export default SingleCard;