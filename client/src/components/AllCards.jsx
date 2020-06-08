import React, { Component } from 'react';
import axios from 'axios';
import SingleCard from './SingleCard';
import SingleCardEmpty from './SingleCardEmpty';
import Grid from '@material-ui/core/Grid';
import LoginRegister from './LoginRegister';

class AllCards extends Component {
    constructor(props) {
        super(props)
        // this.getUserEvents = this.getUserEvents.bind(this);
        this.state = {
          userEvents: [],
          displaySetting: 'block',  // Display "add event" card or not
        //   isLoggedIn: false         // Display cards if logged in, if not display login screen
        }
      }

    // componentDidMount() {
    //     axios.get('/home')
    //       .then(res => {
    //         this.setState({userEvents: res.data.userEvents});
    //         // if(res.data.loggedIn) {
    //         //     this.setState({isLoggedIn: true});
    //         // }
    //       });
    //   }

    // componentWillUpdate() {
    //     axios.get('/home')
    //       .then(res => {
    //         this.setState({userEvents: res.data.userEvents});
    //         // if(res.data.loggedIn) {
    //         //     this.setState({isLoggedIn: true});
    //         // }
    //       });
    //   }

    // Checks if all card slots are being used, if not display one that says "add event"
    checkIfFull() {
        if(this.state.userEvents.length < 10) {
            return 'none';
        }
        return 'block';
    }

    // getUserEvents() {   // Get user events if logged in
    //     axios.get('/home')
    //       .then(res => {
    //         this.setState({userEvents: res.data.userEvents});
    //         // if(res.data.loggedIn) {
    //         //     this.setState({isLoggedIn: true});
    //         // }
    //     });
    // }

    getUserEvents = () => {   // Get user events if logged in
        axios.get('/home')
            .then(res => {
                this.setState({userEvents: res.data.userEvents});
            });
    }

    render() {
        // this.getUserEvents(); 
        return (
            <div>
                <LoginRegister getUserEvents={this.getUserEvents}></LoginRegister>
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