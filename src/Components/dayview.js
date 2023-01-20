import React from "react";
import './dayview.css';

const DayView = (props) => {
    let items = [1,2,3,4,5];
    items = items.map(item => <li>{item}</li>);
    return <div id = "dayview">
        <div id = "left">Back</div>
        <div id = "middle">
            <ul>
                {items}
            </ul>

        </div>
        <div id = "right">Forward</div>

    </div>

};


export default DayView;