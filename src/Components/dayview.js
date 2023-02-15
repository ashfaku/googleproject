import { React, useEffect, useState } from "react";
import { WorkTimeBlock } from "../Assets/js/Calendar/WorkTimeBlock";
import { monthNameToNumber } from "../Assets/js/utilities/utils";
import '../Assets/Styles/dayview.css';
import EventDetails from "./EventDetails";
import TaskDetails from "./TaskDetails";

const DayView = (props) => {
    let hours = [];

    const [itemElements, setItemElements] = useState([]);

    useEffect(() => {
        async function initializePage() {
            // Code that should run after the component is mounted
            await import("../Assets/js/Application/planner").then(async plannerDriver => {
                const elements = [];

                const items = await plannerDriver.initializePlanner(props.year, monthNameToNumber(props.month), props.day);

                for (let item of items) {
                    if (typeof item === WorkTimeBlock) {
                        elements.push(<li><button onClick={() => {
                            props.root.render(<div>
                                <TaskDetails root={props.root} event={item} />
                            </div>);
                        }}>{item.title}</button></li >);
                    } else {
                        elements.push(<li><button onClick={() => {
                            props.root.render(<div>
                                <EventDetails root={props.root} event={item} />
                            </div>);
                        }}>{item.title}</button></li>);
                    }
                }

                setItemElements(elements);
            });
        }
        initializePage();
    }, []);
    for (let i = 1; i < 12; i++) {
        hours.push(<div>{i}am</div>)
    }
    hours.push(<div>Noon</div>);
    for (let i = 1; i < 12; i++) {
        hours.push(<div>{i}pm</div>);
    }
    hours.push(<div>Midnight</div>);
    return <div id="dayview">
        <div id="left">Back</div>
        <div id="middle">
            <div id="time">{hours}</div>
            <ul id="list">
                {itemElements}
            </ul>

        </div>
        <div id="right">Forward</div>

    </div>

};


export default DayView;