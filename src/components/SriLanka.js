import React, { Component } from 'react'
import axios from 'axios';

import Carousel from './components/Carousel';

import '../style.css'
import '../css/srilanka.css'

class SriLanka extends Component{

    state = {
        local_new_cases:0,
        local_new_deaths:0
    }

    componentDidMount(){
       this.getData();
    }

    getData=async()=>{
      var {data} = await axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical');
      var {update_date_time,local_new_cases,local_new_deaths} = data.data;
      this.setState({update_date_time,local_new_cases,local_new_deaths})
    }

    render(){
        var {local_new_cases,local_new_deaths} = this.state
      return (
          <div className="container-fluid" > <br/>
            <div className="row" id="sl-outer-div">
                  
                  <div className="col-md-6 sl-new-cases-div">
                    <h3 className="sl-h3">Local new cases: <b>{local_new_cases}</b></h3>
                  </div>
                  
                  <div className="col-md-6 sl-new-deaths-div">
                    <h3 className="sl-h3" style={{color:'black'}}>Local new deaths: <b>{local_new_deaths}</b></h3>
                  </div>
                  
                  <div className="col-md-6">
                    <Carousel/>
                  </div>
            
            </div>
          </div>
      )
    }
}


export default SriLanka;