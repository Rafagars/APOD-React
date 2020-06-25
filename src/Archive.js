import React, { Component } from 'react';

class Archive extends Component {
    render(){
        let thisYear = new Date()
        thisYear = thisYear.getFullYear()
        const years = Array.from(Array((thisYear + 1) - 1995), (_, i) => i + 1995)

        const divYears = years.map((year, index) => {
            return(
                <div className="year">
                    <h4>{year}</h4>
                </div>
            )
        })

        return(
            <div className="years">
                {divYears}
            </div>
        )
    }
}

export default Archive