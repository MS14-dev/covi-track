import {Component} from 'react'
import axios from 'axios'

import '../style.css'
import '../css/srilanka.css'
import '../css/global.css'

class Global extends Component {

  state = {
    global_deaths:0,
    global_new_cases:0,
    global_new_deaths:0,
    global_total_cases:0
  }

  getData=async()=>{
    var {data} = await axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical');
    console.log(data);
    var {global_deaths,global_new_cases,global_new_deaths,global_total_cases} = data.data;
    this.setState({global_deaths,global_new_cases,global_new_deaths,global_total_cases})
  }
  
  componentDidMount(){
     this.getData()
  }
  
  
  render(){
    var {global_deaths,global_new_cases,global_new_deaths,global_total_cases} = this.state
     return (
        <div className="container-fluid"><br/>
          <div className="row" id="global-outer-div">
          <div className="col-md-6" id='global-new-deaths-div'><h1 >Global New Deaths: <b>{global_new_deaths}</b></h1></div>
          <div className="col-md-6" id="global-new-cases-div"><h1>Global New Cases: <b>{global_new_cases}</b></h1></div>
          <div className="col-md-6" id="global-deaths-div"><h1>Global deaths: <b>{global_deaths}</b></h1></div>
          <div className="col-md-6" id="global-cases-div"><h1 >Global Total Cases: <b>{global_total_cases}</b></h1></div>
          </div>
        </div>
     );
  }
}

export default Global;
