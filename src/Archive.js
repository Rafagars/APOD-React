import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Archive extends Component {
    render(props){

        const divs = this.props.array.map((element, index) => {
            const source = this.props.source + "/" + element
            return(
                <div className="year">
                    <Router>
                        <h4><Link to={source}>{element}</Link></h4>
                    </Router>
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