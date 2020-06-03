import React, { Component } from 'react';
import axios from 'axios';
import SingleCard from './SingleCard';
import Grid from '@material-ui/core/Grid';

class AllCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
          userEvents: []
        }
      }

    componentDidMount() {
        axios.get('/home')
          .then(res => {
            this.setState({userEvents: res.data.userEvents});
            console.log(this.state.userEvents[0]);
          });
      }

    render() { 
        return (
            <div>
                <Grid container spacing={6} style={{marginTop: '.5em'}}>
                    {this.state.userEvents.map((details, index) => (
                        <Grid item xs={2} style={{marginLeft: '2em', marginRight: '2em'}}>
                            <SingleCard 
                                key={index} 
                                eventName={details.eventName} 
                                eventDate={details.eventDate} 
                                eventLoc={details.eventLoc}
                                eventTime={details.eventTime}
                                >
                            </SingleCard>
                        </Grid>
                        // <li key={index}>{details.eventName}, {details.eventLoc}</li>
                    ))}
                    {/* <Grid item xs={2} style={{margin: 'auto'}}>
                        <SingleCard></SingleCard>
                    </Grid>
                    <Grid item xs={2} style={{margin: 'auto'}}>
                        <SingleCard></SingleCard>
                    </Grid>
                    <Grid item xs={2} style={{margin: 'auto'}}>
                        <SingleCard></SingleCard>
                    </Grid>
                    <Grid item xs={2} style={{margin: 'auto'}}>
                        <SingleCard></SingleCard>
                    </Grid>
                    <Grid item xs={2} style={{margin: 'auto'}}>
                        <SingleCard></SingleCard>
                    </Grid> */}
                </Grid>
            </div>  
        );
    }
}
 
export default AllCards;