import React from "react";
import '../Assets/Styles/calendar.css';
import DayView from "./dayview";
const Calendar = (props) => {
    let days = [];
    let prevMonthDays = 5;
    prevMonthDays %= 7; 
   // let term = window.location.hash.split('?')[1].split('&').map(string => string.split('=')).reduce((obj, [key, value]) => Object.assign(obj, { [key]: value }), {});;
   let month = props.month;
   let year = props.year; 
  // console.log(term);
    
    for (let i = 0; i < prevMonthDays; i++)
    {
        days.push(
            <div className = "dayBox hidden">
            </div>);
    }
    let currMonthDays = 31;
    for (let i = 1; i <= currMonthDays; i++)
    {
        days.push(
            <div className = "dayBox">
                <div className = "day" onClick={(e) => {
                    props.root.render(<div>
                        <DayView year = {year} month = {month} day = {i} />
                    </div>);
                }}>{i}</div>
                <div className = "itemList">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>      
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>      
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>     
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </div>
            </div>
        );
    }
    return <div id = "calendar" className="calendaron">
            <div id = "calendarflex">
                {days}


            </div>


    </div>

};


export default Calendar;
