import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import moment from 'moment';

class SingleCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={}
    // }
    render() { 

        //--------Constructing date display---------------
        var fullTime = this.props.eventTime;
        var eTime = this.props.eventTime;
        var hour = parseInt(fullTime);

        if(hour >= 13) {    //pm
            hour -= 12;
            hour = hour.toString();
            eTime = hour + eTime.substring(2) + " PM";
            fullTime = eTime;
        }
        else if(hour === 12) {   // noon
            fullTime = eTime + " PM";
        }
        else if(hour === 0) {    // midnight
            hour += 12;
            hour = hour.toString();
            eTime = hour + eTime.substring(2) + " AM";
            fullTime = eTime;
        }
        else {  //am
            fullTime = eTime + " AM";
        }
        //---------------------------------

        // Display a prettier date using moment.js
        const eventDate = moment(this.props.eventDate).format('MMMM Do YYYY');

        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '.5em'}}>
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
                        <Button variant="contained" style={{marginLeft: '6em'}}>Details</Button>
                    </CardActions>
                    <CardActions>
                        <DeleteIcon style={{cursor: 'pointer', marginLeft: '10em'}}></DeleteIcon>
                    </CardActions>
                </Card>
            </div>  
        );
    }
}
 
export default SingleCard;