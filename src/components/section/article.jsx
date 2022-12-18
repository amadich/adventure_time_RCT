import React, { Component } from "react";
import './article.css';
export default class article extends Component {
    render() {
        return(
            <article>
                <div className="all_inone">

                        <div className="Title_article">Adventure TIME</div>
                        <p className="adT_wiki">
                            Adventure Time , is an unofficial collaborative <span style={{color : "orangered"}}>database</span> about the Cartoon Network series Adventure Time and its fictional universe.
                        </p>

                        <br />

                        <div className="Title_article">Adventure TIME Search API : </div>
                        <div id="cmd_sapi" style={{color: "whitesmoke"}}>
                            
                                
                                    <span style={{color: 'darkorange'}}>"name": </span> "Finn", <br />
                                    <span style={{color: 'darkorange'}}>"fullname": </span> "Finn Mertens", <br />
                                    <span style={{color: 'darkorange'}}>"gender": </span>  "Male", <br />
                                    <span style={{color: 'darkorange'}}>"id": </span> "r6Je", <br />
                                    <span style={{color: 'darkorange'}}>"url": </span> "https://amadich.github.io/Api_AdventureTime/people/r6Je", <br />
                                    <span style={{color: 'darkorange'}}>"img": </span> "img/finn.png"
                               
                        </div>

                      
                </div>
            </article>
        )
    }
}