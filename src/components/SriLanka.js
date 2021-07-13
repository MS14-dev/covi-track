import React, { Component } from 'react'
import axios from 'axios';
import '../style.css'

class SriLanka extends Component{

    state = {
        title:'Covid Tracker',
        day:'',
    }

    componentDidMount(){
       this.getData();
    }

    getData=async()=>{
      var {data} = await axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical');
      var {update_date_time} = data.data;
      this.setState({day:update_date_time})
    }

    render(){
        var {day,title} = this.state
      return (
          <div id="header-div">
            <table>
               <tbody>
                <tr>
                  <td style={{color:'blue'}}>{title}</td>
                  <td style={{}}>Uptodate: <b>{day}</b></td>
                </tr>
                </tbody>
            </table>
          </div>
      )
    }
}


export default SriLanka;