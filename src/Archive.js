import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Content from './Content';

class Archive extends Component {
    render(props){
        function Date(){
            let date = useRouteMatch();
            console.log(date.params.date)
            return(
                <Content url={`https://apodapi.herokuapp.com/api/?date=${date.params.date}`} />
            )
        } 
    
        return(
            <Date />
        )
    }
}

export default Archive