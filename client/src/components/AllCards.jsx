import React, { Component } from 'react';
import axios from 'axios';
import SingleCard from './SingleCard';
import SingleCardEmpty from './SingleCardEmpty';
import Grid from '@material-ui/core/Grid';

class AllCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
          userEvents: [],
          displaySetting: 'block'
        }
      }

    componentDidMount() {
        axios.get('/home')
          .then(res => {
            this.setState({userEvents: res.data.userEvents});
          });
      }

    checkIfFull() {
        if(this.state.userEvents.length < 10) {
            return 'none';
        }
        return 'block';
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