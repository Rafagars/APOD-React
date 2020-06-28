import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Content from './Content'
import Random from './Random'
import Archive from './Archive'

class Header extends Component {
    render(){
        let date = new Date()
        let thisYear = date.getFullYear()
        
        
        const Url = () => {
            let { year } = useParams()
            let { month } = useParams()
            let { day } = useParams()
            let { url } = useRouteMatch()

            if (day !== undefined){
                return(
                    <Content url={`https://apodapi.herokuapp.com/api/?date=${year}-${month}-${day}`} />
                ) 
            } else if (month !== undefined) {
                let numOfDays = new Date(year, month, 0).getDate()
                numOfDays = parseInt(numOfDays.toString())
                let days = []
                if(year == 1995 && month == 6){
                    days = Array.from(Array(11), (_, i) => i + 20)
                } else if(year == thisYear && month == (date.getMonth() + 1)) {
                    days = days = Array.from(Array(date.getDate()), (_, i) => i + 1)
                } else {
                    days = Array.from(Array(numOfDays), (_, i) => i + 1)
                }
                return(
                    <Archive array={days} source = {url} />
                )
            } else if (year !== undefined){
                let months = []
                if (year == thisYear){
                    months = Array.from(Array(12 - (date.getMonth() + 1)), (_, i) => i + 1) 

                }else if (year == 1995 ){
                    months = Array.from(Array(12 - 5), (_, i) => i + 6) 
                } else {
                    months = Array.from(Array(12), (_, i) => i + 1)
                }
                return(
                    <Archive array={months} source = {url} />
                )
            } else {
                const years = Array.from(Array((thisYear + 1) - 1995), (_, i) => i + 1995)
                return(
                    <Archive array={years} source ={url} />
                )
            }

        }
        return (
        <header id="header-nav" className="navbar">
            <div className="container">
                
                    <h1 id="logo"><img id="logo-img" className="" src="./nasa.png" alt="Logo"/><Link to="/APOD-React/">APOD NASA</Link></h1>
                
                    <Link to="/APOD-React/" className="nav-item nav-link">Home</Link>
                    <Link to="/APOD-React/archives" className="nav-item nav-link">Archives</Link>
                    <Link to="/APOD-React/random" className="nav-item nav-link">Random</Link>

                    <Switch>
                        <Route exact path="/APOD-React">
                            <Content url="https://apodapi.herokuapp.com/api/"/>
                        </Route>
                        <Route path="/APOD-React/archives/:year/:month/:day">
                          <Url />
                        </Route>
                        <Route path="/APOD-React/archives/:year/:month/">
                          <Url />
                        </Route>
                        <Route path="/APOD-React/archives/:year">
                            <Url />
                        </Route>
                        <Route path="/APOD-React/archives" >
                            <Url />
                        </Route>  
                        <Route path="/APOD-React/random">
                            <Random/>
                        </Route>
                    </Switch>
                
            </div>

        </header>
        )
    }
}

export default Header
