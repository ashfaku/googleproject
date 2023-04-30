import { React, useEffect, useState } from "react";
import '../Assets/Styles/dayview.css';
import DayView from "./dayview";
import { monthNameToNumber } from "../Assets/js/utilities/utils";

const TaskList = (props) => {
    let hours = [];

    const [itemElements, setItemElements] = useState([]);

    useEffect(() => {
        async function initializePage() {
            // Code that should run after the component is mounted
            await import("../Assets/js/Application/taskAdder").then(async taskAdderDriver => {
                const elements = [];

                const items = await taskAdderDriver.initializeTaskAdder();

                for (let item of items) {
                    elements.push(<li><button onClick={() => {
                        taskAdderDriver.assignTask(item, new Date(props.backYear, monthNameToNumber(props.backMonth) - 1, props.backDay, 0, 0), new Date(props.backYear, monthNameToNumber(props.backMonth) - 1, props.backDay, 1, 0));
                    }}>➕ {item.title}</button></li>);
                }

                setItemElements(elements);
            });
        }
        initializePage();
    }, []);
    return <div id="dayview">
        <button id="back" onClick={() => {
            props.root.render(<div>
                <DayView root={props.root} year={props.backYear} month={props.backMonth} day={props.backDay}></DayView>
            </div>)
        }}>✖️</button>

        <div id="left"></div>

        <div id="middle">
            <ul id="list">
                {itemElements}
            </ul>

        </div>

        <div id="right"></div>

    </div>

};


export default TaskList;