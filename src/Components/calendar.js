import React from "react";
import '../Assets/Styles/calendar.css';
const Calendar = (props) => {
    let days = [];
    let prevMonthDays = 5;
    prevMonthDays %= 7; // doesn't make 
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
                <div>{i}</div>
                <div className = "itemList">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>      <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>      <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>      <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </div>
            </div>
        );
    }
    return <div id = "calendar">
            <div id = "calendarflex">
                {days}


            </div>


    </div>

};


export default Calendar;
