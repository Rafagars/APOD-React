import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Archive extends Component {
    render(props){

        const divs = this.props.array.map((element, index) => {
            const source = this.props.source + "/" + element
            return(
                <div className="year">
                    <h4><Link to={source}>{element}</Link></h4>
                </div>
            )
        })

        return(
            <div className="years">
                {divs}
            </div>
        )
    }
}

export default Archive