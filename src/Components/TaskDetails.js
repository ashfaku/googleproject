import { React, useEffect } from "react";
import '../Assets/Styles/taskDetails.css';
import DayView from "./dayview";
import { deleteBlock, updateHandler } from "../Assets/js/Application/taskDetailPage";

const TaskDetails = (props) => {

    useEffect(() => {
        // Code that should run after the component is mounted
        import("../Assets/js/Application/taskDetailPage").then(taskDetailsDriver => {
            taskDetailsDriver.initializeTaskDetailPage(props.event);
        });
    }, []);

    return <div id="task-details">
        <button id="back" onClick={() => {
            props.root.render(<div>
                <DayView root={props.root} year={props.backYear} month={props.backMonth} day={props.backDay}></DayView>
            </div>);
        }}>⬅️</button>
        <h1 id="title">Task Title</h1>
        <p id="description">Task description</p>
        <br />
        From <input id="start-time" type="datetime-local" />
        <br />
        To <input id="end-time" type="datetime-local" />
        <br />
        <button onClick={() => {
            updateHandler();
        }}>Update</button>
        <button onClick={() => {
            deleteBlock();
        }}>Delete</button>
    </div>

};


export default TaskDetails;