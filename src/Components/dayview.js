import { React, useEffect, useState } from "react";
import { WorkTimeBlock } from "../Assets/js/Calendar/WorkTimeBlock";
import { monthNameToNumber } from "../Assets/js/utilities/utils";
import '../Assets/Styles/dayview.css';
import EventDetails from "./EventDetails";
import TaskDetails from "./TaskDetails";
import TaskList from "./TaskList";

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
                                <TaskDetails root={props.root} event={item} backYear={props.year} backMonth={props.month} backDay={props.day} />
                            </div>);
                        }}>{item.title}</button></li >);
                    } else {
                        elements.push(<li><button onClick={() => {
                            props.root.render(<div>
                                <EventDetails root={props.root} event={item} backYear={props.year} backMonth={props.month} backDay={props.day} />
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
        <button id="left" onClick={() => {
            props.root.render(<div>
                <DayView root={props.root} year={props.year} month={props.month} day={props.day - 1} />
            </div>)
        }}>Back</button>
        <div id="middle">
            <div id="time">{hours}</div>
            <ul id="list">
                {props.month} {props.day}, {props.year}
                {itemElements}
            </ul>

        </div>
        <button id="right" onClick={() => {
            props.root.render(<div>
                <DayView root={props.root} year={props.year} month={props.month} day={props.day + 1} />
            </div>)
        }}>Forward</button>
        <button id="add-block-button" onClick={() => {
            props.root.render(<div>
                <TaskList root={props.root} backYear={props.year} backMonth={props.month} backDay={props.day}></TaskList>
            </div>);
        }}>➕</button>
    </div>

};


export default DayView;