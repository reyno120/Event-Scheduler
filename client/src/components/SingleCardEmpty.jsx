import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import axios from 'axios';

class SingleCardEmpty extends Component {
    constructor(props) {
        super(props);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            open: false,
            setOpen: false,
            eventName: '',
            eventLoc: '',
            eventDate: null,
            eventTime: null,
            eventReminder: 'At time of event',
            eventDesc: ''
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
        const { eventName, eventLoc, eventDate, eventTime, eventReminder, eventDesc } = this.state;

        axios.post('event/create', {eventName, eventLoc, eventDate, eventTime, eventReminder, eventDesc})
            .then((res) => {
                // console.log("Posted Create!");
            });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { eventName, eventLoc, eventDate, eventTime, eventReminder, eventDesc } = this.state;

        return (
            <div>
            <Dialog open={this.state.open} onClose={this.handleClickClose} onBackdropClick={this.handleClickClose}>
                <DialogTitle 
                    id="form-dialog-title" 
                    style={{textAlign: 'center', color: '#3f51b5'}}>
                    New Event
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={this.handleSubmit}>
                        <TextField 
                            autoFocus
                            margin="dense"
                            id="eventName"
                            name="eventName"
                            label="Event Name"
                            value={eventName}
                            onChange={this.onChange}
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField 
                            autoFocus
                            margin="dense"
                            id="eventLoc"
                            name="eventLoc"
                            label="Location"
                            value={eventLoc}
                            onChange={this.onChange}
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField 
                            autoFocus
                            margin="dense"
                            id="eventDate"
                            name="eventDate"
                            value={eventDate}
                            onChange={this.onChange}
                            type="date"
                            fullWidth
                            required
                        />
                        <TextField 
                            autoFocus
                            margin="dense"
                            id="eventTime"
                            name="eventTime"
                            value={eventTime}
                            onChange={this.onChange}
                            type="time"
                            fullWidth
                            required
                        />
                        <InputLabel id="setReminderLabel" style={{fontSize: '.8rem'}}>Set Reminder</InputLabel>
                        <Select 
                            autoFocus
                            margin="dense"
                            id="eventReminder"
                            name="eventReminder"
                            labelId="setReminderLabel"
                            value={eventReminder}
                            onChange={this.onChange}
                            select
                            fullWidth
                        >
                            <MenuItem value={'At time of event'}>At time of event</MenuItem>
                            <MenuItem value={'1 hour'}>1 hour</MenuItem>
                            <MenuItem value={'2 hours'}>2 hours</MenuItem>
                            <MenuItem value={'1 day'}>1 day</MenuItem>
                            <MenuItem value={'2 days'}>2 days</MenuItem>
                            <MenuItem value={'1 week'}>1 Week</MenuItem>
                            <MenuItem value={'2 weeks'}>2 Weeks</MenuItem>
                        </Select>
                        <TextField 
                            autoFocus
                            margin="dense"
                            id="eventDesc"
                            label="Description"
                            name="eventDesc"
                            value={eventDesc}
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
                            Create a New Event!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" style={{marginLeft: '5em', marginTop: '2em', marginBottom: '3.5em'}} onClick={this.handleClickOpen}>Click Here!</Button>
                    </CardActions>
                </Card>
        </div>  
        );
    }
}
 
export default SingleCardEmpty;