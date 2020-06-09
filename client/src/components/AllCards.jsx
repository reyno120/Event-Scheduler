import React, { Component } from 'react';
import axios from 'axios';
import SingleCard from './SingleCard';
import SingleCardEmpty from './SingleCardEmpty';
import Grid from '@material-ui/core/Grid';
import LoginRegister from './LoginRegister';

class AllCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
          userEvents: [],
          displaySetting: 'block',  // Display "add event" card or not
          openLoginDialog: 'true'
        }
      }

    componentDidMount() {
        axios.get('/home')
          .then(res => {
            this.setState({userEvents: res.data.userEvents});
            console.log(res.data.userEvents);
            if(res.data.userEvents.length > 0) {
                this.setState({openLoginDialog: false});
            }
          });
      }

    // Checks if all card slots are being used, if not display one that says "add event"
    checkIfFull() {
        if(this.state.userEvents.length < 10) {
            return 'none';
        }
        return 'block';
    }

    // Get user events if logged in
    getUserEvents = () => {
        axios.get('/home')
            .then(res => {
                this.setState({userEvents: res.data.userEvents});
                this.setState({openLoginDialog: false});
            });
    }

    render() {
        return (
            <div>
                <LoginRegister getUserEvents={this.getUserEvents} openLoginDialog={this.state.openLoginDialog}></LoginRegister>
                <Grid container spacing={6} style={{marginTop: '.5em'}}>
                    {this.state.userEvents.map((details, index) => (
                        <Grid item xs={2} style={{marginLeft: '2em', marginRight: '2em'}}>
                            <SingleCard 
                                key={index} 
                                eventName={details.eventName} 
                                eventDate={details.eventDate} 
                                eventLoc={details.eventLoc}
                                eventTime={details.eventTime}
                                objectId={details._id}
                                >
                            </SingleCard>
                        </Grid>
                    ))}
                    <Grid item xs={2} style={{marginLeft: '2em', marginRight: '2em'}}>
                        <SingleCardEmpty style={{display: this.checkIfFull}}></SingleCardEmpty>
                    </Grid>
                </Grid>
            </div>  
        );
    }
}
 
export default AllCards;