import React, { Component } from "react";
import './ul.css';
export default class ul extends Component  {
    render() {
        return(
            <ul>
                <li id="in_search_li">
                    <input type="text" className="in_search" placeholder="Search"/>
                </li>
                 <br /> <br /> <br />
                <li className="li_ul">Home</li>
                <li className="li_ul">Contact</li>
                <li className="li_ul">About</li>
                <br /> <br /> <br />


                <span style={{color:"#222",fontFamily: "cursive"}}>copy right GitHub amadich</span>

            </ul>
        )
    }
}