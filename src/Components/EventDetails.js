import { React, useEffect } from "react";
import '../Assets/Styles/eventDetails.css';
import DayView from "./dayview";

const EventDetails = (props) => {

    useEffect(() => {
        // Code that should run after the component is mounted
        import("../Assets/js/Application/eventDetailPage").then(eventDetailsDriver => {
            eventDetailsDriver.initializeEventDetailPage(props.event);
        });
    }, []);

    return <div id="event-details">
        <button id="back" onClick={() => {
            props.root.render(<div>
                <DayView root={props.root} year={props.backYear} month={props.backMonth} day={props.backDay}></DayView>
            </div>);
        }}>⬅️</button>
        <h1 id="title">Event Title</h1>
        <p id="description">Event description</p>
        <br />
        From <span id="start-time">Start time</span>
        <br />
        To <span id="end-time">End time</span>
    </div>

};


export default EventDetails;