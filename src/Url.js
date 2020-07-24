import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import Content from './Content';
import Archive from './Archive';


const Url = () => {
        let date = new Date()
        let thisYear = date.getFullYear()
        let { year } = useParams()
        let { month } = useParams()
        let { day } = useParams()
        let { url } = useRouteMatch()

        if (day !== undefined){
            return(
                <Content url={`https://apodapi.herokuapp.com/api/?date=${year}-${month}-${day}`} />
            ) 
        } else if (month !== undefined) {
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
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
                <Archive array={days} source = {url} title={`${monthNames[month - 1]} - ${year}`} />
            )
        } else if (year !== undefined){
            let months = []
            if (year == thisYear){
                months = Array.from(Array((date.getMonth()) + 1), (_, i) => i + 1) 

            }else if (year == 1995 ){
                months = Array.from(Array(12 - 5), (_, i) => i + 6) 
            } else {
                months = Array.from(Array(12), (_, i) => i + 1)
            }
            return(
                <Archive array={months} source = {url} title={year} />
            )
        } else {
            const years = Array.from(Array((thisYear + 1) - 1995), (_, i) => i + 1995)
            return(
                <Archive array={years} source ={url} title="Archive" />
            )
        }
    }


export default Url