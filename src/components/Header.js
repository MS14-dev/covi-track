import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import logo from '../images/covi_tracker.png'
import '../style.css'
import '../css/header.css'

class Header extends Component{
    state = {
       title: "Covid Tracker",
       logo,
       update_date_time:'',
    }
    componentDidMount(){
        this.getData();
    }
    getData=async()=>{
        var {data} = await axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical');
        var {update_date_time} = data.data;
        this.setState({update_date_time})
    }
    render(){
        var {title,logo,update_date_time} = this.state;
        return(
            <div className="container-fluid" id="header_div_outer">
                <div className="row" id="header_div">
                   {/* <div className="col-md-2"><Link style={{marginTop:100}} to='/'><img width='100' height='100' src={logo} alt="logo"/></Link></div> */}
                   <div className="col-md-4" id="header_update">Last update on :{update_date_time}</div>
                   <div className="col-md-8"><h1 id="header_title">{title}</h1>
                   <Link style={{color:'black',fontWeight:'bold',marginLeft:20}} to='/global'>Global</Link>
                   <Link style={{color:'black',fontWeight:'bold',marginLeft:20}} to='/'>Sri Lanka</Link>
                   <hr/>
                   </div>
                </div>
            </div>
        )
    }
}

export default Header;