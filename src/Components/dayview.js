import { React, useEffect } from "react";
import '../Assets/Styles/dayview.css';

const DayView = (props) => {
    let items = ["use the computed tab to see an Element's style rules, and there's a -> button for each rule to jump to where it's inherited from", 2, 3, 4, 5];
    let hours = [];
    useEffect(() => {
        // Code that should run after the component is mounted
        import("../Assets/js/Application/planner").then(plannerDriver => {
            console.log(plannerDriver.initializePlanner(props.year, props.month, props.day));
        });
    }, []);
    for (let i = 1; i < 12; i++) {
        hours.push(<div>{i}am</div>)
    }
    hours.push(<div>Noon</div>);
    for (let i = 1; i < 12; i++) {
        hours.push(<div>{i}pm</div>);
    }
    hours.push(<div>Midnight</div>);
    items = items.map(item => <li>{item}</li>);
    return <div id="dayview">
        <div id="left">Back</div>
        <div id="middle">
            <div id="time">{hours}</div>
            <ul id="list">
                {items}
            </ul>

        </div>
        <div id="right">Forward</div>

    </div>

};


export default DayView;