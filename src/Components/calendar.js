import React from "react";
import '../Assets/Styles/calendar.css';
const Calendar = (props) => {
    let days = [];
    for (let i = 1; i < 32; i++) {
        days.push(
            <button className="dayBox">
                {i}
            </button>
        );
    }
    return <div id="calendar">
        <div id="calendarflex">
            {days}


        </div>


    </div>

};


export default Calendar;