import React, { Component } from "react";
import './sidebar.css';
import Ul from './ul';
export default class sidebar extends Component {
    render() {
        return(
            <>
                    <aside>
                        <Ul /> 
                    </aside>
            </>
        )
    }
}