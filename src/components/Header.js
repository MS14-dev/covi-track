import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import logo from '../images/covi_tracker.png'
import '../style.css'

class Header extends Component{
    state = {
       title: "Covid Tracker",
       logo,
    }
    render(){
        var {title,logo} = this.state;
        return(
            <div className="container">
                <div className="row">
                   <div className="col-md-2"><Link to='/'><img width='100' height='100' src={logo} alt="logo"/></Link></div>
                   <div className="col-md-10"><b style={{color:'#8E44AD',fontSize:120}}>{title}</b></div>
                   <Link style={{color:'black',fontWeight:'bold',marginLeft:20}} to='/global'>Global</Link>
                   <hr/>
                </div>
            </div>
        )
    }
}

export default Header;