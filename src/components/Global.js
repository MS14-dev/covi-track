import {Component} from 'react'
import axios from 'axios'

import '../style.css'

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
        <div className="container">
          <div className="row">
          <div className="col-md-6" style={{height:200,background:'greenyellow'}}><b>Global deaths:</b> {global_deaths}</div>
          <div className="col-md-6"><b>Global New Cases:</b> {global_new_cases}</div>
          <div className="col-md-6"><b >Global New Deaths:</b> {global_new_deaths}</div>
          <div className="col-md-6"style={{height:200,background:'yellow'}}><b >Global Total Cases:</b> {global_total_cases}</div>
          </div>
        </div>
     );
  }
}

export default Global;
