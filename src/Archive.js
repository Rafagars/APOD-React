import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Archive extends Component {
    render(props){
        const { title } = this.props
        const divs = this.props.array.map((element, index) => {
            const source = this.props.source + "/" + element
            return(
                <div className="flex">
                    <h4 key={element}><Link to={source}>{element}</Link></h4>
                </div>
            )
        })
        return(
            <div className="container-fluid">
                <h2 className="mx-auto">{title}</h2>
                <div className="flexs container">
                    {divs}
                </div>
            </div>
        )
    }
}
