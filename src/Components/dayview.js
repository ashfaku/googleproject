import React from "react";
import './dayview.css';

const DayView = (props) => {
    let items = ["use the computed tab to see an Element's style rules, and there's a -> button for each rule to jump to where it's inherited from",2,3,4,5];
    let hours = [];
    for (let i = 1; i < 12; i++)
    {
        hours.push(<div>{i}am</div>)
    }
    hours.push(<div>Noon</div>);
    for (let i = 1; i < 12; i++)
    {
        hours.push(<div>{i}pm</div>);
    }
    hours.push(<div>Midnight</div>);
    items = items.map(item => <li>{item}</li>);
    return <div id = "dayview">
        <div id = "left">Back</div>
        <div id = "middle">
            <div id = "time">{hours}</div>
            <ul id = "list">
                {items}
            </ul>

        </div>
        <div id = "right">Forward</div>

    </div>

};


export default DayView;